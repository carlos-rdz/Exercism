let earth = 31557600;

let planets = {
    earth : earth,
    mercury : (earth * 0.2408467),
    venus : (earth * 0.61519726),
    mars : (earth * 1.8808158),
    jupiter : (earth * 11.862615),
    saturn : (earth * 29.447498),
    uranus : (earth * 84.016846),
    neptune : (earth * 164.79132)
};

export function age(planet,age){
    return (age / planets[planet]).toFixed(2) * 1;
}