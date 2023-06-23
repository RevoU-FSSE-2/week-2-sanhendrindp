# Yukihira Restaurant Website

I made this website based on the anime <b>Shokugeki no Soma</b>, where the main protagonist in this anime is named Yukihira Soma who owns a restaurant called Yukihira Restaurant. Based on that, I'm trying to create a website where users can see the food made by the characters in this anime.

<b>Used this **[link](https://yukihira-restaurant.netlify.app/)** to open the website.</b>

## Animation

1. I used marquee element to make simple text scroll animation from right to left.

```html
<marquee behavior="scroll" direction="left" scrollamount="15"
  >Order Now to Get <span>50% Discount</span> !</marquee
>
```

```css
@keyframes colorChanging {
  from {
    color: #e67e22;
  }

  to {
    color: #ebebeb;
  }
}
```

2. I made an animation so that the portrait of the character Yukihira Soma can move up and down.

```css
@keyframes floatImage {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1rem);
  }
  100% {
    transform: translateY(0);
  }
}
```

## Download link

I'm trying to make a button, where user can download restaurant menu. The downloaded file will be a .pdf file.

```html
<a
  href="document/Yukihira Restaurant Menu.pdf"
  download="Yukihira Restaurant Menu"
  >Download Our Menu</a
>
```

## Hamburger button

There is also a hamburger button feature that can be accessed if the user uses a mobile device. The hamburger button itself, I made it using full CSS with 3 span elements.

```html
<div class="hamburger-menu">
  <input type="checkbox" />
  <span></span>
  <span></span>
  <span></span>
</div>
```
