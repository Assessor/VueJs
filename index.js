const car = (name, model, owner, year, phone, image) =>  ({ name, model, owner, year, phone, image });
const logs = (text, type, date = new Date()) => ({text, type, date});

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 929 123 45 67', 'ImagesIndex/focus.jpg'),
    car('Ford', 'Mondeo', 'Vladimir', 2018, '+7 900 133 41 67', 'ImagesIndex/mondeo.jpg'),
    car('Porshe', 'Panamera', 'Irina', 2015, '+7 921 567 45 67', 'ImagesIndex/panamera.jpg')
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        logs: []
    },
    methods: {
        selectCar: function(index) {
            this.selectedCarIndex = index;
            this.car = cars[index];
        },
        newOrder: function() {
            this.modalVisibility = false;
            this.logs.push(logs('Заказ добавлен', 'Ok'));
        },
        cancelOrder: function() {
            this.modalVisibility = false;
            this.logs.push(logs('Заказ отменен', 'Cnl'));
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            });
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
});