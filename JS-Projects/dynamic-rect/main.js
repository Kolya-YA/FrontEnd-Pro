const field = document.querySelector('#app');
const fieldOffcet = field.getBoundingClientRect();
let points = [...Array(4)];
const rect = document.createElement('div');
let tmpRect;
let isMoving = false;

const handleDrag = e => {
    if (isMoving) {
        const prev = field.querySelector(`[data-number="${e.target.dataset.prev}"]`)
        const next = field.querySelector(`[data-number="${e.target.dataset.next}"]`)
        const curLeft = `${e.clientX - fieldOffcet.left - 8}px`
        const curTop = `${e.clientY - fieldOffcet.top - 8}px`

        e.target.style.left = curLeft
        e.target.style.top = curTop
        if (+e.target.dataset.number % 2) {
            prev.style.top = curTop;
            next.style.left = curLeft;
        } else {
            prev.style.left = curLeft;
            next.style.top = curTop;
        }
        drawRect(tmpRect);
    }
}

const handleDragStart = (e) => {
    // e.target.style.opacity = '0.4';
    tmpRect = rect.cloneNode()
    tmpRect.classList.add('rect--tmp')
    field.appendChild(tmpRect)
    isMoving = true
}

const handleDragEnd = e => {
    // e.target.style.opacity = '1';
    isMoving = false;
    field.querySelectorAll('.rect--tmp').forEach(tr => tr.remove());
    drawRect(rect);
}

const createRect = e => {
    rect.classList.add('rect');
    field.appendChild(rect);

    points = points.map((_, i) => {
        const point = document.createElement('div');
        point.classList.add('point');
        point.dataset.number = i;
        point.dataset.next = i + 1 === points.length ? 0 : i + 1;
        point.dataset.prev = i - 1 < 0 ? points.length - 1 : i - 1;
        point.style.left = `${e.pageX - 8}px`;
        point.style.top = `${e.pageY - fieldOffcet.top - 8}px`;
        // point.addEventListener('mousedown', handleDragStart);
        // point.addEventListener('mousemove', handleDrag);
        field.appendChild(point);
        return point;
    });
}

const drawRect = (curRect) => {
    const left = Math.min(parseInt(points[0].style.left), parseInt(points[2].style.left));
    const top = Math.min(parseInt(points[0].style.top), parseInt(points[2].style.top));
    const width = Math.abs(parseInt(points[0].style.left) - parseInt(points[2].style.left));
    const height = Math.abs(parseInt(points[0].style.top) - parseInt(points[2].style.top));
    curRect.style.left = `${left}px`;
    curRect.style.top = `${top}px`;
    curRect.style.width = `${width}px`;
    curRect.style.height = `${height}px`;
}

const handlerCreate = e => {
    if (!points[0]) {
        createRect(e);
    } else {
        points[1].style.left  = `${e.pageX - fieldOffcet.left - 8}px`;
        points[2].style.left  = `${e.pageX - fieldOffcet.left - 8}px`;
        points[2].style.top  = `${e.pageY - fieldOffcet.top - 8}px`;
        points[3].style.top  = `${e.pageY - fieldOffcet.top - 8}px`;
        field.removeEventListener('click', handlerCreate, true);
        points.forEach(point => {
            point.addEventListener('mousedown', handleDragStart);
            point.addEventListener('mousemove', handleDrag);
        });
        window.addEventListener('mouseup', handleDragEnd);
    }
    drawRect(rect);
}

field.addEventListener('click', handlerCreate, true);
