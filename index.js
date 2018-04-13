const car = (name, model, owner, year, phone, image) =>  ({ name, model, owner, year, phone, image });

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 929 123 45 67', 'ImagesIndex/focus.jpg'),
    car('Ford', 'Mondeo', 'Vladimir', 2018, '+7 900 133 41 67', 'ImagesIndex/mondeo.jpg'),
    car('Porshe', 'Panamera', 'Irina', 2015, '+7 921 567 45 67', 'ImagesIndex/panamera.jpg')
];

new Vue({
    el: '#app',
    data: {
        cars: cars
    }
});