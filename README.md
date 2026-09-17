# December's Promise

Create a minimal, romantic, cinematic website for my long-distance girlfriend.

The website is for our first meeting in December 2026. We know the month, but we don't know the exact date yet.

Keep the website very simple and emotional.

DESIGN STYLE

Use a premium minimalist aesthetic:

- Deep black / warm off-white background
- Soft burgundy or muted rose accent
- Elegant serif typography for romantic text
- Clean sans-serif for small text
- Lots of empty space
- Subtle grain/noise texture
- Very soft glow
- Smooth fade and slide animations
- Beautiful photography
- No 3D objects
- No 3D heart
- No glassmorphism
- No excessive particles
- No flashy animations
- No complicated UI

It should feel like a luxury romantic film intro.

---

1. OPENING SCREEN

Full-screen minimal hero.

Small text:

FOR THE GIRL I'M WAITING TO MEET

Large elegant heading:

Until December

Small subtitle:

The month our distance finally ends.

Below:

We don't know the exact day yet...
but we know it's coming. ❤️

Add a simple elegant button:

Begin

Button should have a subtle hover and press animation.

When clicked, smoothly transition to the countdown.

---

2. COUNTDOWN

Minimal black screen.

Small heading:

OUR MONTH

Large:

DECEMBER 2026

Text:

The exact day is still a mystery.

Then display a live countdown until December 1, 2026:

DECEMBER BEGINS IN

76 DAYS

14 : 32 : 08 : 21
DAYS HOURS MIN SEC

Use JavaScript:

const decemberStart = new Date("2026-12-01T00:00:00");

The countdown must update every second.

Make the date easy to change.

Under the countdown:

"But every day brings us closer."

Use only subtle fade/scale animation.

---

3. ONE LAST THING...

After the countdown, create a large amount of empty space.

Centered text:

One last thing…

Wait briefly, then reveal:

Open This

Make "Open This" a simple elegant button/text link.

No giant effects.

When clicked:

- Slowly fade the current screen
- Add a smooth cinematic transition
- Reveal the final section

---

4. FINAL SURPRISE

Use one personal photo:

/images/us.jpg

Make the photo large and cinematic with a dark overlay.

Then reveal text slowly:

One day in December...

I'll finally see you.

Not through a screen.

Not through a call.

But right in front of me. ❤️

Then:

I can't wait to meet you.

Finally:

See you in December, my love.

Keep this section extremely minimal.

---

ANIMATION STYLE

Use Framer Motion for:

- Fade in
- Fade out
- Slow slide-up
- Gentle image reveal
- Text appearing line by line
- Smooth page transitions

Animations should be slow, subtle and emotional.

No spinning 3D objects.

No 3D hearts.

No excessive floating elements.

---

OPTIONAL MUSIC

Add an optional music button in the corner.

Music:

/music/our-song.mp3

Do not autoplay.

Allow her to tap the button to play/pause.

Keep the music control almost invisible.

---

MOBILE DESIGN

Make mobile the primary experience.

It must look beautiful on:

- iPhone
- Android
- Tablet
- Desktop

The countdown must fit perfectly on small screens.

No horizontal scrolling.

Buttons should be easy to tap.

---

TECH STACK

Use:

- React
- Vite
- JavaScript
- CSS
- Framer Motion
- Lucide React

No backend required.

Keep the code simple and clean.

Use:

src/
├── components/
│ ├── Hero.jsx
│ ├── Countdown.jsx
│ ├── OneLastThing.jsx
│ ├── FinalSurprise.jsx
│ └── MusicButton.jsx
├── App.jsx
├── App.css
└── main.jsx

public/
├── images/
│ └── us.jpg
└── music/
└── our-song.mp3

Create a simple configuration:

const config = {
name: "Devumma",
decemberStart: "2026-12-01T00:00:00",
photo: "/images/us.jpg",
music: "/music/our-song.mp3"
};

The entire experience should be:

Until December
↓
Begin
↓
December Countdown
↓
One last thing…
↓
Open This
↓
Final romantic message + photo

Keep it short, mysterious, intimate, elegant and premium.

The final website should feel like a personal love letter, not a typical romantic template.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a6097011-4edb-4095-a93c-ca58162dd4af).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
