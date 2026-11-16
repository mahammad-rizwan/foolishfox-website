import { Fragment } from 'react';
import Artboard from './Artboard.jsx';
import Text from './Text.jsx';
import { Picture, Reel, Logo, Line } from './Media.jsx';
import { images, reels, brands } from '../data/media.js';

const ORANGE = 'var(--orange)';
const CREAM = 'var(--cream)';
const INK = 'var(--ink)';
const GREY = 'var(--grey)';

/* 1 — Home */
export function Hero() {
  // Info list block (Bangalore / Creative studio / ...)
  const ix = 446.6;
  return (
    <Artboard id="home" background="#fffcf5">
      <Text as="h1" x={102} y={161.8} w={633.4} size={95.29} lh={88.6} m={0.58} color={ORANGE} style={{ fontFamily: 'var(--spray)' }}>
        THE STREET
      </Text>
      <Text as="p" x={100.2} y={265.3} w={635.2} size={79.53} lh={74} m={0.58} color={ORANGE} style={{ fontFamily: 'var(--spray)' }} delay={100}>
        IS OUR STUDIO.
      </Text>
      <Text
        x={102}
        y={370.5}
        w={644.7}
        size={17.89}
        lh={25}
        color={GREY}
        delay={200}
        style={{ fontFamily: 'var(--garet)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.135em' }}
      >
        ( Street content campaigns by FoolishFox. )
      </Text>

      <div className="group group--list">
        {[
          { y: 473, text: 'Bangalore' },
          { y: 519.05, text: 'Creative studio' },
          { y: 565.1, text: ['Street content &', <br key="b" />, 'activations'] },
        ].map((row, i) => (
          <Fragment key={i}>
            {i > 0 && <Line x={446} y={row.y - 13.75} w={223.9} delay={260 + i * 80} />}
            <Text
              x={ix}
              y={row.y}
              w={222.6}
              size={16.28}
              lh={22.1}
              m={0.86}
              color="#000"
              delay={300 + i * 80}
              style={{ fontFamily: 'var(--garet)', textTransform: 'uppercase', letterSpacing: '0.135em' }}
            >
              {row.text}
            </Text>
          </Fragment>
        ))}
      </div>

      <Picture
        x={824.8}
        y={36.6}
        w={501.9}
        h={699.4}
        src={images.hero}
        alt="Collage of Bangalore streets, a camera operator and an editing setup"
        crop={{ x: 0, y: -96.4, w: 501.9, h: 892.2 }}
        variant="full"
        delay={150}
      />
    </Artboard>
  );
}

/* 2 — Philosophy */
export function Philosophy() {
  const body = { fontFamily: 'var(--sans)' };
  return (
    <Artboard id="philosophy" background="#fa573e">
      <Text x={60.4} y={87.2} w={223.7} size={20} lh={27.9} color={GREY} className="label">
        foolishfox.co
      </Text>
      <Text as="h2" x={60.4} y={141.3} w={620} size={80} lh={80} color={CREAM} className="serif" delay={100}>
        It usually starts
        <br />
        with a <em>stranger</em>.
      </Text>
      <Text x={60.4} y={359.4} w={580} size={26.67} lh={32} color={CREAM} style={body} delay={200}>
        Someone with somewhere to be.
      </Text>
      <Text x={60.4} y={422.4} w={580} size={26.67} lh={32} color={CREAM} style={body} delay={260}>
        A story we haven't heard.
      </Text>
      <Text x={60.4} y={485.4} w={580} size={26.67} lh={32} color={CREAM} style={body} delay={320}>
        An opinion nobody asked for yet.
      </Text>
      <Text x={60.4} y={606} w={580} size={34.67} lh={41.6} color={CREAM} className="serif" delay={400}>
        That's where FoolishFox begins.
      </Text>

      <Reel
        label="Street activation reel: Take what you need"
        x={843.9}
        y={144.2}
        w={329.1}
        h={461.3}
        crop={{ x: 0, y: -45.45, w: 329.1, h: 585 }}
        delay={150}
        {...reels.stranger}
      />
    </Artboard>
  );
}

/* 3 — VoxPops & concept reels */
export function Conversations() {
  return (
    <Artboard id="work" background="#ffffff">
      <Text as="h2" x={520.6} y={76.8} w={559.9} size={54.72} lh={47.6} color={ORANGE} align="center" className="serif">
        A few <em>conversations</em>
        <br />
        we started.
      </Text>
      <Text x={76.8} y={543.5} w={266.2} size={24} lh={33} color={GREY} align="right" className="label" delay={300}>
        VoxPops &amp;
        <br />
        Concept reel
      </Text>

      <Reel label="Vox pop reel 1" x={383} y={224.6} w={239.3} h={383.5} crop={{ x: 0, y: 0, w: 239.3, h: 425.4 }} delay={100} {...reels.vox1} />
      <Reel label="Concept reel: Bangaloreans core" x={661.8} y={222} w={240.8} h={386.1} crop={{ x: 0, y: 0, w: 240.8, h: 428 }} delay={200} {...reels.vox2} />
      <Reel label="Vox pop reel 2" x={942.1} y={222} w={240.8} h={386.1} crop={{ x: 0, y: 0, w: 240.8, h: 428 }} delay={300} {...reels.vox3} />
    </Artboard>
  );
}

/* 4 — About */
export function About() {
  return (
    <Artboard id="about" background="#fff9ea">
      <Reel
        label="Break my heart street activation"
        x={263}
        y={110.6}
        w={332.6}
        h={491.6}
        crop={{ x: 0, y: -26.44, w: 332.6, h: 591.2 }}
        {...reels.about}
      />

      <Text x={1029.7} y={68.6} w={236.2} size={27.31} lh={24.6} color={ORANGE} align="right" wrap style={{ fontFamily: 'var(--sans)', fontWeight: 700 }}>
        ABOUT FOOLISHFOX
      </Text>
      <Text as="h2" x={595.6} y={147} w={680} size={60} lh={54} color={INK} align="right" className="serif" delay={100}>
        We were <em>curious</em>
        <br />
        what would happen
        <br />
        if we just walked up
        <br />
        and started a
        <br />
        conversation.
      </Text>
      <Line x={906.5} y={447.4} w={359.5} color="#000" align="end" delay={200} />
      <Text x={1117.9} y={509.3} w={148.1} size={26.67} lh={24} color={INK} align="right" style={{ fontFamily: 'var(--sans)' }} delay={250}>
        So we did.
      </Text>
      <Text x={778.3} y={602.2} w={487.6} size={24} lh={21.6} color={INK} align="right" wrap style={{ fontFamily: 'var(--sans)' }} delay={300}>
        Somewhere between strangers, strange ideas and unexpected answers
      </Text>
      <Text x={792.6} y={658} w={474.3} size={34.67} lh={31.2} color={INK} align="right" className="serif" delay={350}>
        <span style={{ color: ORANGE }}>FoolishFox</span> happened.
      </Text>
    </Artboard>
  );
}

/* 5 — Street activations */
export function StreetActivations() {
  const crop = (w, y, h) => ({ x: 0, y, w, h });
  return (
    <Artboard id="street-activations" background="#fffcf5">
      <Text as="h2" x={494.6} y={112.2} w={430} size={33.33} lh={39.3} color={GREY} align="center" className="label" style={{ fontWeight: 600 }}>
        Street Activations
      </Text>
      <Reel label="Street activation: coconuts in Bangalore" x={69.7} y={187.6} w={267.4} h={411.6} crop={crop(267.4, -24.79, 475.3)} delay={100} {...reels.street1} />
      <Reel label="Street activation: the art of convincing" x={390.7} y={187.6} w={264.9} h={411.6} crop={crop(264.9, -24.79, 471)} delay={200} {...reels.street2} />
      <Reel label="Street activation: how far can you go for marketing" x={709.6} y={187.6} w={264.9} h={411.6} crop={crop(264.9, -47.07, 471)} delay={300} {...reels.street3} />
      <Reel label="Street activation: my team gave me" x={1028.6} y={187.6} w={267.8} h={411.6} crop={crop(267.8, -27.63, 476)} delay={400} {...reels.street4} />
    </Artboard>
  );
}

/* 6 — The idea */
export function TheIdea() {
  const body = { fontFamily: 'var(--sans)' };
  return (
    <Artboard id="the-idea" background="#fa573e">
      <Text x={84.2} y={33} w={160} size={26.67} lh={27.7} color={CREAM} style={{ ...body, fontWeight: 700 }}>
        THE IDEA
      </Text>
      <Text as="h2" x={76.8} y={98.1} w={639} size={66.67} lh={66.67} color="#fff" className="serif" delay={100}>
        Every conversation
        <br />
        needs somewhere
        <br />
        to <em>begin</em>.
      </Text>
      <Line x={76.8} y={322.4} w={330} color={CREAM} delay={200} />
      <Text x={76.8} y={360.7} w={651.8} size={24} lh={32.4} color="#fff" style={body} wrap delay={250}>
        Sometimes it's a question.
        <br />
        <br />
        Sometimes it's a strange thought nobody expected to hear on the street.
        <br />
        <br />
        Sometimes, it's simply seeing a brand
        <br />
        from an angle nobody else has.
      </Text>
      <Text x={76.8} y={677} w={420} size={33.33} lh={46.7} color="#fff" className="serif" delay={350}>
        And that's where we start.
      </Text>

      <Reel
        label="Street activation: cooler of Enlite cans"
        x={866.9}
        y={125.5}
        w={314.4}
        h={483.2}
        crop={{ x: 0, y: -46.57, w: 314.4, h: 558.9 }}
        delay={150}
        {...reels.idea}
      />
    </Artboard>
  );
}

/* 7 — Brands */
export function Brands() {
  return (
    <Artboard id="brands" background="#fff9ea">
      <Text x={76.8} y={50} w={339.1} size={24} lh={28.2} color={ORANGE} className="label" style={{ fontWeight: 500, letterSpacing: '0.15em' }}>
        Some good company
      </Text>
      <Text as="h2" x={76.8} y={120.9} w={729.8} size={66.67} lh={68.7} color={INK} className="serif" delay={100}>
        A few brands
        <br />
        we've <em>crossed paths</em> with.
      </Text>
      <div className="group group--logos">
        {brands.map((b, i) => (
          <Logo key={b.name} x={b.x} y={b.y} src={b.src} alt={b.name} crop={b.crop} delay={200 + i * 60} />
        ))}
      </div>
    </Artboard>
  );
}

/* 8 — Testimonial reels & brand storytelling */
export function Reels() {
  const crop = (y) => ({ x: 0, y, w: 246.5, h: 438.2 });
  return (
    <Artboard id="reels" background="#ffffff">
      <Text as="h2" x={76.8} y={81.5} w={349.7} size={29.33} lh={41} color={GREY} className="label" style={{ fontWeight: 600 }}>
        Testimonial
        <br />
        Reels
      </Text>
      <Reel label="Testimonial reel 1" x={76.8} y={206.6} w={243.6} h={357.4} crop={{ x: 0, y: 0, w: 243.6, h: 433 }} delay={100} {...reels.testimonial1} />
      <Reel label="Testimonial reel 2" x={361.3} y={201.4} w={246.5} h={362.6} crop={crop(0)} delay={200} {...reels.testimonial2} />
      <Reel label="Brand storytelling reel 1" x={741.7} y={201.4} w={246.5} h={362.6} crop={crop(-28.72)} delay={300} {...reels.story1} />
      <Reel label="Brand storytelling reel 2" x={1042.7} y={201.4} w={246.5} h={362.6} crop={crop(0)} delay={400} {...reels.story2} />
      <Text as="h2" x={993.1} y={589.5} w={296.1} size={29.33} lh={41} color={GREY} align="right" className="label" style={{ fontWeight: 600 }} delay={300}>
        Brand
        <br />
        Storytelling
      </Text>
    </Artboard>
  );
}

/* 9 — When a brand comes to us */
export function Process() {
  return (
    <Artboard id="process" background="#fa573e">
      <Text x={399.1} y={54} w={568.9} size={24} lh={28.2} color="#fff" align="center" className="label" style={{ letterSpacing: '0.15em' }}>
        When a brand comes to us
      </Text>
      <Text as="h2" x={252.6} y={172} w={890.1} size={85.33} lh={110.5} color={CREAM} align="center" className="serif" delay={100}>
        You bring us something
        <br />
        to <em>talk about</em>.
      </Text>
      <Text x={298} y={520} w={772.7} size={42.67} lh={58} color={CREAM} align="center" className="serif" style={{ fontStyle: 'italic' }} delay={250}>
        We find a way to make
        <br />
        people talk about it.
      </Text>
    </Artboard>
  );
}

/* 10 — Contact */
export function Contact() {
  const gx = 756.6;
  const gy = 243.5;
  const s = 1.1011;
  const linkStyle = { color: 'inherit', textDecoration: 'none' };
  return (
    <Artboard id="contact" background="#000">
      <Picture
        x={-35.2}
        y={-38.8}
        w={1646.8}
        h={835.1}
        src={images.contactBg}
        alt="The FoolishFox crew pointing at the camera"
        opacity={0.3}
        variant="bg"
        crop={{ x: -220.52, y: -91.96, w: 2016.6, h: 1088.7 }}
      />
      <Text as="h2" x={244.5} y={229.6} w={457.6} size={74.67} lh={67.2} color={ORANGE} className="serif" wrap delay={100}>
        Got something worth <em>talking</em> about?
      </Text>

      <Text x={gx} y={gy} w={198.9 * s} size={19.36} lh={27.1} color="#fff" className="label" wrap style={{ letterSpacing: '0.15em' }} delay={200}>
        Let's start a conversation
      </Text>
      <Line x={gx} y={gy + 58.9 * s} w={309 * s} color={CREAM} delay={240} />
      <Text x={gx} y={gy + 82 * s} w={348.7} size={25.42} lh={35.6} color="#fff" style={{ fontFamily: 'var(--sans)' }} delay={280}>
        <a href="tel:+919591757397" style={linkStyle}>+91 9591757397</a>
      </Text>
      <Line x={gx} y={gy + 131.2 * s} w={309 * s} color={CREAM} delay={320} />
      <Text x={gx} y={gy + 159.5 * s} w={348.7} size={25.42} lh={35.6} color="#fff" style={{ fontFamily: 'var(--sans)' }} delay={360}>
        <a href="mailto:foolishfox.agency@gmail.com" style={linkStyle}>foolishfox.agency@gmail.com</a>
      </Text>
      <Line x={gx} y={gy + 214 * s} w={309 * s} color={CREAM} delay={400} />

      <Text x={948.5} y={667.2} w={348.1} size={40} lh={36} color={ORANGE} align="right" className="serif" style={{ fontStyle: 'italic' }} delay={450}>
        Let's take it outside.
      </Text>
    </Artboard>
  );
}
