<template>
  <div class="about">
    <div class="title" style="padding-bottom:0px;">
      <h1>About Us</h1>
    </div>

    <div class="about row">
        <div class="about">
            <figure style="margin-top:-30px;">
              <img src="../assets/moneyball.jpg" alt="" class="img-fluid">
              <figcaption>Scene from the movie <em>Moneyball</em>, 2011. </figcaption>
            </figure>
        </div>
        <div class="about">
          <div class="about-info">
            <h2>How do we work?</h2>
            <p>First and foremost, this website is still being built. Once completed, a user can create a
            free account where they can track their own league. A section is in development where users can
            enter what happens during a game quickly, and with that alone stats are developed. Multiple accounts
            can be associated with a league, so all friends can see their stats and track records.
            </p>
            <p>
              Statistics are an essential part of sports. They allow us to see things that we are not able to from
              pure observation. Our hope is that by tracking the statistics, you will be able to notice things about your
              ability to play basketball, focus on improvement in the right areas, and have fun while doing it.
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<style>
.about-info p {
  text-align: left;
}

.about-info {
  margin-bottom: 80px;
}

img {
  margin: 10px;
}

@media
only screen and (max-width: 48em;),
(min-device-width: 0em) and (max-device-width: 48em)  {
  img {
    width: 100%;
  }
}
</style>
