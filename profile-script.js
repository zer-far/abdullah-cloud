const Http = new XMLHttpRequest();
const url='https://camo.githubusercontent.com/cb926a78b4523535613b37e536e6bac498116f0e70590e383a3fa9a598c261c8/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7a65722d666172266c6162656c3d50726f66696c65253230766965777326636f6c6f723d306537356236267374796c653d666c6174';
Http.open("GET", url);
Http.send();
Http.open("GET", url);
Http.send();
Http.open("GET", url);
Http.send();
Http.open("GET", url);
Http.send();
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
