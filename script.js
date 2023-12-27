const cars = document.querySelector("#cars");
const title = document.querySelector("#title");

function checkData(resolve, reject) {
  const carDatas = [
    {
      image:
        "ray-jaguar-f-type-svr-convertible-car-png-image-jaguar-f-type-svr-11563537597i0c9ruksej.png",
      name: "Ray-jaguar",
      price: "23000",
    },
    {
      image: "Chevrolet-Corvette-C8-Stingray-2020-2.png",
      name: "Chevrolet-Corvette",
      price: "123453",
    },
    {
      image: "gratis-png-tesla.png",
      name: "Tesla",
      price: "345677",
    },
    {
      image: "peugeot.webp",
      name: "Peugeot",
      price: "122347",
    },
    {
      image: "range-rover.png",
      name: "Range Rover",
      price: "90000",
    },
    {
      image: "cadillac.png",
      name: "Cadillac",
      price: "234560",
    },
  ];
  if (carDatas.length > 0) {
    resolve(carDatas);
  } else {
    reject("no data was found here");
  }
}

const MyPromise = new Promise(checkData);
MyPromise.then((addCarDatas) => {
  title.innerText = "Cars";
  cars.innerHTML = addCarDatas
    .map((el) => {
      return `<div class="card " style="width: 18rem">
      <img
        class="card-img-top bg-secondary""
        src="${el.image}"
        alt="Card image cap"
        style="max-width: 100%; height: 80%;" 
      />
      <div class="card-body">
        <h5 class="card-title fs-3 text-secondary ">${el.name}</h5>
        <p class="card-text text-primary fs-4 ">
        ${el.price} $
        </p>
      </div>
    </div>
  </div>`;
    })
    .join("");
}).catch((errorMessage) => console.error("no data was found here"));
