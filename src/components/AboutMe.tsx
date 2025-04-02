const AboutMe = ({ }) => {
  const imageSize = 250
  const url = `https://lh3.googleusercontent.com/pw/AP1GczPWEfGjzX1F2xrNG_uEEunMKVtqSAOrWWeSgcDvhedIfzY-vIMTuvUIGVNiBWsirw-VeAz0WfLv0YY3PQHZBRufc_CR1gbtcJiEZIxT_NlhmWDaPCKRWGcdT2POkMkY5G7d4PollA93yJMWjEYLissRuhoZTQ7tE8O6L7TJJr2SAkfk4Cu9PSVo4s6O8SW2Y51p_NXC_fMEMRQ2FSnfvcaEYRceLX50k_1ZE_l_1JZxELRkGXA-Ndh9ZxEjPFdnq43SSYDioCsej-RoumDpNiwfXxmousO0GI428OJT6FxVI7iAgtuHVs1M8UpkUJFpt4whfqAVCbXj2f_Aia5PeJYfjv-kCVtJuNzoNVvJFTvjIlmz9Y4KQhdExjUcce1p33ihL_KqoDwh1F5UekbaAFNqYW9stFFHRiZOz567CS2RFyKdfg2PqE9H978DtIDvzLopUKWq-zmVUD2yc7gBDvKIUeCPmqcK76fj6PQcqU4oVhvd6S0r4lUFCfCVe73jZkp-cnyWkG6rf1wpFHKOESX5P7RDht6Pw5n5G0L7iZa6vewobNZRnW89KFumsnLMXxkoz9JfZ_lm_RWw1sKGfhdq95sc9ArsWo5jAZpju-9hmWdI2lxgBxUSOcLE3nZVBkAIyGzRRuRqY5EuaYQfI1PaaQ2gPpkDgJdiGL86_BZePh2uPUlPtq74oJu__URo8jC0Yx8Szq3thZ2W0KOPZxNzy1b-mcdKO2qJLUHda8Ok5Mnf0Ob05SPrV676eu_rnmTr3bc3w3rekhEQe6rIkZu9_3YWIFLGQogvetQ6PK7P5ixpe9Q3VJMjDCsFZ-nSahqRdwtqs-gBTiRiE0bM5qpcaWTGVKSqghaTPL6DrH2MGOF42BlW1vQw6eTSeegaq82zRX7rj1w9hYwiOgCFbdw7_eRQJ_ZiO3EJn4Mg6IirgVO_MQcTcusbthB2n-sIUR5PLl_n9vCY0LXEfziCHfnCmcW19aqWnYifyBO_XqM1bReMxy0=s${imageSize}-no`

  return (
    <section className="about onscroll">
      <h1>About</h1>
      <div className="about-content">
        <img
          src={url}
          alt="A placeholder image"
          className="profile-image"
        />
        <p className="about-me-text">
          <i>
            Driven and enthusiastic full-stack web developer with a strong
            foundation in <b>JavaScript</b> and <b>React</b>. Proficient in
            front-end development using <b>Vite/React</b> and <b>Next.js</b>, and
            experienced in back-end development with <b>Node.js</b> and{' '}
            <b>Python</b>-based frameworks. Passionate about exploring the
            intersection of web development and artificial intelligence, with
            hands-on experience in <b>Python</b> libraries such as{' '}
            <b>Scikit-learn</b>, <b>NumPy</b>, <b>Pandas</b>, and{' '}
            <b>TensorFlow</b>. Committed to continuous learning and skill
            enhancement, with a solid understanding of <b>C</b> and <b>C++</b>{' '}
            programming acquired through academic coursework. Dedicated to
            creating efficient, scalable, and user-friendly applications.
            <br />
            <br />
            After facing challenges with JEE Mains in May 2024, I embarked on a
            coding journey fueled by a passion for learning. I started with{' '}
            <b>JavaScript</b> and <b>React</b>, captivated by the world of web
            development. As AI trends gained momentum, my interest intensified,
            and I delved into <b>Python</b> and its ecosystem, mastering
            libraries like <b>Scikit-learn</b>, <b>NumPy</b>, <b>Pandas</b>, and{' '}
            <b>TensorFlow</b>. My college curriculum also provided a foundation
            in <b>C</b>, and I continue to expand my skills. Coding, for me, is an
            immersive and beautiful world.
          </i>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

