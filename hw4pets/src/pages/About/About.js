import React from 'react';

import style from './About.module.css';

const About = () => {
  return (
    <div className={style.page}>
      <h2>About Page</h2>
      <p className={style.p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eveniet
        deleniti esse culpa maxime harum velit dignissimos nisi officiis
        provident distinctio explicabo suscipit beatae nostrum possimus
        voluptatem cum eius, non facere.
      </p>
      <p className={style.p}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
        cupiditate excepturi recusandae iusto repellat facere non suscipit
        labore, enim, laborum nostrum veniam quasi fuga dolorem ipsa libero est
        unde necessitatibus nesciunt eum exercitationem consectetur rerum culpa.
      </p>
      <p className={style.p}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In suscipit
        aliquam ab pariatur blanditiis. Saepe nulla ducimus vel! Doloremque
        facilis quod nisi laborum facere labore dicta rem maxime nobis rerum?
      </p>
    </div>
  );
};

export default About;
