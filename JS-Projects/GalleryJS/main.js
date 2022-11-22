const thumbImages = document.querySelector('.gallery__thumbs')
const fullImages = document.querySelector('.gallery__view')

const defaultImgURl = 'https://picsum.photos/id';
const thumbSize = 120;
const fullSize = 480;

const imgLink = (imgNumber, imgWidth, imgHeight = imgWidth, baseUrl = defaultImgURl) => {
    return `${baseUrl}/${imgNumber}/${imgWidth}/${imgHeight}`;
}

const images = {
    78: { name: "Door" },
    133: { name: "Cars" },
    239: { name: "Dandelion" },
    290: { name: "Building" },
    514: { name: "Car" },
    579: { name: "Roadway" },
    620: { name: "Bridge" },
    859: { name: "Bicycle" },
    903: { name: "Milky Way" },
    1008: { name: "Sleeping" },
};

Object.keys(images).forEach((imgNum) => {
    const imgThumbBtn = document.createElement('button')
    const imgThumbImg = document.createElement('img');
    imgThumbImg.src = imgLink(imgNum, thumbSize);
    imgThumbImg.dataset.id = `imgNum${imgNum}`;
    imgThumbImg.alt = `${images[imgNum].name} preview`;
    imgThumbImg.width = thumbSize;
    imgThumbImg.height = thumbSize;
    imgThumbBtn.appendChild(imgThumbImg);
    thumbImages.appendChild(imgThumbBtn);
    
    const fullImg = document.createElement('img');
    fullImg.src = imgLink(imgNum, fullSize);
    fullImg.dataset.id = `imgNum${imgNum}`;
    fullImg.alt = images[imgNum].name;
    fullImg.width = fullSize;
    fullImg.height = fullSize;
    fullImg.style.display = 'none'
    fullImages.appendChild(fullImg);
})

const hideImg = () => fullImages.querySelectorAll('img').forEach((img) => {
    img.style.display = 'none';
});

thumbImages.querySelectorAll('button').forEach(btn => 
    btn.addEventListener('click', ({ target }) => {
        console.log(target.dataset.id)
        hideImg()
        fullImages.querySelector(`[data-id="${target.dataset.id}"]`).style.display = 'block';
    })
)

fullImages.addEventListener('click', hideImg, false)