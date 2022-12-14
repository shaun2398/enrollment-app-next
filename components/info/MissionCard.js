import React from 'react'

import MyImage from '../MyImage'

export default function MissionCard() {
  return (
    <div class="container is-widescreen notification is-link columns is-desktop mx-auto my-6">
      <div class="column my-auto">
        <h4 class="is-size-4 title">Mission</h4>
        <p class="content has-text-justified">
          To provide the highest quality healthcare experience for all
          stakeholders through: Competent, compassionate, collegial, and ethical
          medical professionals and allied hospital personnel Superior service
          delivery, enhanced by technological and digital innovations and
          supported by research Sustained training/educational programs and
          other capacity-building initiatives; ethics-based and responsive to
          evolving health challenges and global standards Community responsive,
          collaborative, and socially empowering healthcare programs
        </p>
      </div>
      <div class="column">
        <figure>
          <MyImage
            src="/mission_about_page.jpg"
            alt="hospital picture"
            width={500}
            height={300}
          />
        </figure>
      </div>
    </div>
  );
}
