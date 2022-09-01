import { Component } from "@angular/core";

@Component({
  selector: 'app-root',  
  templateUrl: './app.Component.html',
  styleUrls: ['./app.component.css']    
})
export class AppComponent{
  name = "younes"
  imgURL = "https://www.gstatic.com/webp/gallery/1.jpg"
  images = [
    'https://www.gstatic.com/webp/gallery/1.jpg',
    'https://www.gstatic.com/webp/gallery/1.jpg',
    'https://www.gstatic.com/webp/gallery/1.jpg'

  ]
  currentDate = new Date()
  cost = 2000
  temperature = 23.5
  pizza = {
    toppings: ['vegi', 'chicken'],
    size:'large'
  }

  blueClass = false
  fontSize = 16
  
  getName() {
    return this.name
  }
  changeImage(event: KeyboardEvent) {
    this.imgURL= (event.target as HTMLInputElement).value;
  }
  logImg(event: string) {
    console.log(event)
  }
  
}