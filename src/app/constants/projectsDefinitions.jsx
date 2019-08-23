import React from 'react';

import WordLink from '../components/WordLink';
import { projectObjects } from './projects';
import { skillObjects } from './skills';

export const projectTagDefinitions = {
  Mobile: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈmōbəl,ˈmōˌbīl/',
    description: (
      <>
        Since mobile phones and devices have become virtual extensions of most
        people, I have found it so interesting to constantly be in close contact
        with nearly everyone around me. Being able to put a program on a
        platform so readily available is incredibly exciting. With my only true
        attempt at a mobile specific app being{' '}
        <WordLink {...projectObjects["Q'd Up"]} />, I understand the challenges,
        but I am still interested in giving new ideas a shot.
      </>
    ),
  },
  Plugin: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈpləɡ ˌin/',
    description: (
      <>
        While I have only limited experience writing plugins,{' '}
        <WordLink {...projectObjects['Quick Search']} />, I loved the quick
        development time to add a tiny feature that I wanted from Firefox. I
        have yet to run into more desired features, but am prepared to jump
        right in when the next opportunity appears.
      </>
    ),
  },
  Web: {
    partOfSpeech: 'noun',
    pronunciation: '/web/',
    description: (
      <>
        I was not expecting to enjoy developing websites as much as I have. My
        initial dive into building a website was a raw{' '}
        <WordLink {...skillObjects.HTML} /> and light{' '}
        <WordLink {...skillObjects.CSS} /> site I can only hope has not been
        captured by Internet Archive&apos;s Wayback Machine. Oh no, it has...
        Anyway, that abomination initially turned me off from trying to develop
        websites because I just hadn&apos;t grasped the power of effective CSS.
        As well, I was more interested in logic and at the time of writing my
        first site, I found that little logic was in play - I was building a
        static site of links. Since then I have learned a thing or two about{' '}
        <WordLink {...skillObjects.Javascript} /> and{' '}
        <WordLink {...skillObjects.React} /> and now know that I can get
        seriously logical about developing websites.
      </>
    ),
  },
  'Desktop Application': {
    partOfSpeech: 'noun',
    pronunciation: '/ˈdeskˌtäp ˌapləˈkāSH(ə)n/',
    description: (
      <>
        GUI applications, along with CLI applications, were the first
        applications I learned to write since they were the easiest to teach
        computer science with. I enjoyed starting out with writing these
        applications, they were relatively simple and totally exploratory. They
        quickly evolved into a platform for me to add functionality to my
        desktop. Whether it was to clean up my ever growing Downloads folder
        with <WordLink {...projectObjects['Clear Downloads']} punc="," />{' '}
        attempt to &quot;Visually Encrypt&quot; photos with{' '}
        <WordLink {...projectObjects.PictoCrypt} punc="," /> or continually ping
        multiple computers with{' '}
        <WordLink {...projectObjects.BulkPing} punc="," /> I was continually
        attempting to add something new to my computer.
      </>
    ),
  },
};

export const projectWordDiscussions = {
  PictoCrypt: [
    {
      title: 'Visual Photo Encrypter',
      description: (
        <>
          <div className="tab" />
          PictoCrypt was written after a &quot;shower thought&quot; I had about
          seeing encryption in action. I started out by researching key-based
          permutations since I wanted a calculated rearrangement of pixels based
          on a password. As I was researching, I found this{' '}
          <a href="https://pdfs.semanticscholar.org/3372/5b376865f37d2fc9f71e8c2e0bfbbdaf4a6f.pdf">
            article
          </a>
          , which I then used as my ground work for writing the program. In a
          nutshell, it uses the integer values of the password&apos;s ASCII
          characters to generate the permutation. A permutation should only be
          created by a single string, however I have not tested it enough to
          verify this. The program was not written to be a serious encryption,
          but rather a program to play with the idea of seeing encryption.
          <div className="new-line" />
          <div className="tab" />
          To use the program, an image must be given along with a password. Once
          both are supplied, the user can click Encrypt to start the permutation
          process which updates in the screen as it progresses. Once it is done,
          it will output an image with the original title and suffix
          &quot;-encrypted&quot; in the original directory. The user may then
          open the encrypted image in the program and decrypt it using the same
          password that was used to encrypt it.
          <div className="new-line" />
        </>
      ),
      photoElements: [],
    },
    {
      title: 'Video Demo',
      description: (
        <>
          <iframe
            title="PictoCrypt Video"
            src="https://www.youtube.com/embed/1VpYCKk_Dq4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      ),
      photoElements: [],
    },
  ],
  BulkPing: [
    {
      title: 'Mass Pinging GUI Utility',
      description: <></>,
      photoElements: [],
    },
  ],
  'Clear Downloads': [
    {
      title: 'Downloads Cleaner',
      description: <></>,
      photoElements: [],
    },
  ],
  'Program Snapshot': [
    {
      title: 'Program Launcher',
      description: <></>,
      photoElements: [],
    },
  ],
  "Q'd Up": [
    {
      title: 'Android App for Parties',
      description: <></>,
      photoElements: [],
    },
  ],
  'Quick Search': [
    {
      title: 'Firefox Plugin',
      description: <></>,
      photoElements: [],
    },
  ],
  'WillMcCall.com': [
    {
      title: 'Personal Website',
      description: <></>,
      photoElements: [],
    },
  ],
};
