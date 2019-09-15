import React from 'react';

import WordLink from '../components/WordLink';
import { interestObjects } from './interests';
import ceramicsPhotoElements from './ceramicsPhotoElements';
import illustratorPhotoElements from './illustratorPhotoElements';
import photoshopPhotoElements from './photoshopPhotoElements';
import mechKeebPhotoElements from './mechKeebPhotoElements';

export const interestTagDefinitions = {
  Art: {
    description: (
      <>
        Just like virtually everyone, I was introduced to art at a young age.
        Through my friends, school, and family I was exposed to different art
        forms; be it my friend&apos;s MS Paint pixel art, Andy Warhol&apos;s
        screen prints, or my grandmother&apos;s watercolors, they were all
        intriguing and fun. Over the years, several art forms really captured
        me: <WordLink {...interestObjects.Ceramics} /> for its utility,{' '}
        <WordLink {...interestObjects.Photography} /> for the moment it
        captures, and digital art for how much control given over the medium
        (not to mention CTRL+z for mistakes).
      </>
    ),
  },
  Entertainment: {
    description: (
      <>
        I mean, who doesn&apos;t like some form of entertainment?{' '}
        <WordLink {...interestObjects.Music} /> is definitely my favorite form
        because it can be enjoyed just about anywhere, and concerts are unlike
        anything I have experienced elsewhere. Nonetheless, I find{' '}
        <WordLink {...interestObjects.Movies} /> and{' '}
        <WordLink {...interestObjects['Video Games']} /> to be a great way to
        kick back and enjoy some time with family and friends after work.
      </>
    ),
  },
  Technology: {
    description: (
      <>
        Growing up with a CRT with a built in web cam as my shiny main display I
        had no idea things could get much better than that. Technology has
        continued to surprise me and I&apos;ve enjoyed keeping up with the
        trends, refinements, and new developments. I&apos;m always curious what
        is right around the corner.
      </>
    ),
  },
};

export const interestPageData = {
  Ceramics: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I had not expected to fall in love with
            ceramics when I first was introduced to it back in 2014. I was
            digitally focussed at the time, tinkering with{' '}
            <WordLink {...interestObjects.Photoshop} /> mostly, and the shine of
            physical art lost its luster around early high school. However, I
            had just moved and after all of the change I wanted to try something
            new. My mom found that we had a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://communityartscenter.org"
            >
              Community Arts Center
            </a>{' '}
            in our area, so we decided I should give a ceramics class a shot.
            Despite the challenge of centering the clay and patience required to
            bring my ideas to life, I was hooked.
            <div className="new-line" />
            <div className="tab" />
            Since then I have taken a handful of classes both during school and
            my internships, but most recently I threw at{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bklynclay/"
            >
              BKLYN CLAY
            </a>{' '}
            in NYC. I truly found my love for mug making there! Some say I may
            have went overboard on the quantity, but I felt they were the right
            challenge: making an appropriately sized vessel, pulling a proper
            handle, and attaching it comfortably. Not to mention, the colors at
            BKLYN CLAY were phenomenal!
          </>
        ),
      },
    ],
    media: {
      albums: [...ceramicsPhotoElements],
    },
  },
  Photography: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Illustrator: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
    media: {
      albums: [...illustratorPhotoElements],
    },
  },
  Photoshop: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
    media: {
      albums: [...photoshopPhotoElements],
    },
  },
  Music: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
    media: {
      playlistGroups: [
        {
          groupTitle: null,
          playlists: [
            {
              playlistURL:
                'https://open.spotify.com/embed/playlist/3DUAv4ZHasMtMw2wTo74FX',
              title: 'Run.sh',
            },
            {
              playlistURL:
                'https://open.spotify.com/embed/playlist/4A3BizRP5tNBHAutmpu392',
              title: 'Good Feels',
            },
            {
              playlistURL:
                'https://open.spotify.com/embed/playlist/0U9YVaWab1fW0N0qcx9d1d',
              title: 'Awol Dragons',
            },
          ],
        },
      ],
    },
  },
  Movies: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  'Video Games': {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I grew up playing games on the PlayStation 2
            and XBOX. I have a ton of good memories staying up late with friends
            playing after school. It was nearly a daily ritual to play with
            them, but as I started to think about University, I knew I had to
            put school first, and my time spent on video games withered.
            <div className="new-line" />
            <div className="tab" />
            By the time I was in University I mainly played{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
            >
              CS:GO
            </a>
            , which my friends and I bonded over around freshmen year. I soon
            found that I didn&apos;t have much time to sink long hours into a
            game, so I got interested in games my friends and I could quickly
            pick up and put down. We got really into{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cleverendeavourgames.com/ultimate-chicken-horse"
            >
              Ultimate Chicken Horse
            </a>
            ,{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jackboxgames.com/party-pack-three/"
            >
              Jackbox Party Pack 3
            </a>
            , and a couple other multiplayer games.
            <div className="new-line" />
            <div className="tab" />
            After the bulk of my school was over and I was either Co-Oping or
            taking less Computer Science heavy semesters, I found I had some
            more time to try out new games. I got a Nintendo Switch and upgraded
            my desktop. Lately I find myself occasionally playing{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.zelda.com/breath-of-the-wild/"
            >
              Zelda: Breath of the Wild
            </a>
            ,{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://subsetgames.com/itb.html"
            >
              Into the Breach
            </a>
            , and{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.satisfactorygame.com/"
            >
              Satisfactory
            </a>{' '}
            when I have some time to spare in my day.
          </>
        ),
      },
    ],
  },
  'Mechanical Keyboards': {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Ever since middle school I wanted to build my own computer, which I
            did eventually get around to. I put all of my money into the
            computer itself and skimped out on the peripherals. I was using some
            dinky old membrane keyboard and an uncomfortable mouse, but I was
            happy to have built a computer of my own. I was so excited about my
            new machine that I shared it with everyone I could, and soon found
            out that there was more to the desktop computer experience than the
            tower and screen.
            <div className="new-line" />
            <div className="tab" />A friend of mine had a Razer Black Widow back
            in the day, and the moment I felt the click of the keys, I knew I
            was missing out. Fast forward a year or so, I had a Black Widow of
            my own and I was happy. Sure it was loud, and my family often asked
            me to stop playing games late into the night, but the feeling of
            typing on it was great. It served me well for a long while, and
            eventually I did start to feel bad that it was so loud. I&apos;d
            often stay up late working on homework as my roommate slept, and I
            tried to click the keys ever so gently, but it never fully stifled
            them. I just couldn&apos;t part with it; beyond the sound, it was
            still functioning fine.
            <div className="new-line" />
            <div className="tab" />
            Eventually some keys started to get stuck and I realized I
            didn&apos;t need such a bulky keyboard, so I looked into
            alternatives and wound up in the DIY realm. I had soldered before,
            and I like being able to make things my own, so I thought it was a
            no brainer. I got my first build from{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://sentraq.com/"
            >
              Sentraq
            </a>{' '}
            in Feb 2019, and the rest is history.
            <div className="new-line" />
            <div className="tab" />I enjoyed picking out the parts, putting it
            together, and even customizing the firmware by adding my own configs
            to a forked{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wmccall/qmk_firmware"
            >
              QMK Firmware Repo
            </a>
            . I have since convinced some friends to build their own, and it
            brought back good memories of building computers with people back
            when I was just starting out with all of this tech work.
          </>
        ),
      },
    ],
    media: {
      albums: [...mechKeebPhotoElements],
    },
  },
};
