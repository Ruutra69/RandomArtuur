const imageArray = [
    "https://live.staticflickr.com/5461/17162789456_16216e9910_o_d.jpg",
    "https://live.staticflickr.com/6158/6223069770_0b564a68b6_o_d.jpg",
    "https://previews.dropbox.com/p/thumb/ABdU_b4gb62vT2r4TRergu4-agebbI8xwQ_rjH3b2XN-O0sd9x2FKcq0vAhKhl74P6r3RYbr6sjLZP0Un-Y_Rz-paU7aFzDLmu71r8x4Aaz46JOPaFdvlhzKyUnYSE9X5PnGtXbmNtfA3KJmBQYHcglDjMSrHeX4uDJn-THsj_Hppoa1ZfP2a7X54FU0aNbsSQP0VCT-l90K8pwrcfKgd2QelsCOQF51p_8nTY-HPTx2beAoQnK3WvHK3KySuiRC6yf-FrKutEtUsE2H8JBzw2Fq2GY_dkOzCIHq-q8onAAw6J3nCQBfbPd42eQbfkszkujMKR_vpYIAS1hAlPouIY5qSa21wqOls_taKW0hLqO3kZXHBRsWDRvRxWi76ESa3gst_hpUX5ox-81DuXVmO28Z4n5xVY2EOQyrLA1cCKmLZf8XoOHM0tmAN3cYJn9fYuplPWM4k9-oOV5QM84nGaw9JFF345a1HNZLgu1cSj-AGg/p.jpeg",
    "https://live.staticflickr.com/2909/13973869847_0ab4419a99_o_d.jpg",
    "https://live.staticflickr.com/2907/14540681468_505cb2306a_o_d.jpg",
    "https://live.staticflickr.com/3851/14704349886_e66dda3bdb_o_d.jpg",
    "https://live.staticflickr.com/3870/14727498565_3214dbf470_o_d.jpg",
    "https://live.staticflickr.com/8784/17000955848_8fb87a98be_o_d.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}