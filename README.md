[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/DenEdwards/Convrt/blob/main/Convrt.js">
    <img src="images/Convrt.PNG" alt="Logo" border-radius="7px" width="500" height="auto">
  </a>

  <h3 align="center">Convrt</h3>

  <p align="center">
    A JavaScript library that allows users to easily convert between different measurement units.
    <br />
    <a href="https://github.com/DenEdwards/Convrt"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/DenEdwards/Convrt/issues">Report Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

This project was created to be an easier way to convert different units on the fly. It allows the user to convert a unit amount into as many other unit amounts as they wish. 

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Download the `Convrt.js` file at [https://github.com/DenEdwards/Convrt/blob/main/Convrt.js](https://github.com/DenEdwards/Convrt/blob/main/Convrt.js)
2. Reference it in your HTML file as:
```HTML
<script src="Convrt.js"></script>
```
3. Use it in your JavaScript file with:
```JS
cnvr$(value, currentUnit, wantedUnit)
```
4. You will be able to use the returned object properties to access the different wanted units.




<!-- USAGE EXAMPLES -->
## Usage
Testing with 1 length unit.

```JS
console.log(cnvr$(2, "cm","m"));
```
```ssh
{original: {…}, m: 0.02}
m: 0.02
original: {unit: "cm", amount: 2}
__proto__: Object
```

Testing with multiple units.
```JS
var lengthUnits = ["nm","um","mm", "cm","m", "km", "mi","yd","ft","in","nmi"];
console.log(cnvr$(2, "mm",...lengthUnits));
```
```ssh
{original: {…}, nm: 2000000, um: 2000, mm: 2, cm: 0.2, …}
cm: 0.2
ft: 0.007
in: 0.079
km: 0
m: 0.002
mi: 0
mm: 2
nm: 2000000
nmi: 0
original: {unit: "mm", amount: 2}
um: 2000
yd: 0.002
__proto__: Object
```



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/DenEdwards/Convrt/issues) for a list of proposed features (and known issues).

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/DenEdwards/Convrt](https://github.com/DenEdwards/Convrt)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/DenEdwards/Convrt.svg?style=flat-square
[contributors-url]: https://github.com/DenEdwards/Convrt/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/DenEdwards/Convrt.svg?style=flat-square
[forks-url]: https://github.com/DenEdwards/Convrt/network/members

[stars-shield]: https://img.shields.io/github/stars/DenEdwards/Convrt.svg?style=flat-square
[stars-url]: https://github.com/DenEdwards/Convrt/stargazers

[issues-shield]: https://img.shields.io/github/issues/DenEdwards/Convrt
[issues-url]: https://github.com/DenEdwards/Convrt/issues

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/denzel-edwards-093927170/

