import React from 'react';

import Emoji from 'a11y-react-emoji';

import WordLink from '../components/WordLink';
import { skillObjects } from './skills';
import { projectObjects } from './projects';

export const skillTagDefinitions = {
  Language: {
    description: (
      <>
        I started working with programming languages in 2011 when I took my
        first <WordLink {...skillObjects.Java} /> course. I then spent the most
        of my time working with Java off and on again up until 2016 when I was
        formally introduced to <WordLink {...skillObjects.Python} /> and{' '}
        <WordLink {...skillObjects['C#']} punc="." /> Python quickly became my
        favorite language to work with because of its ease in prototyping and
        quick scripting. Most recently I have been using{' '}
        <WordLink {...skillObjects.JavaScript} /> to work with{' '}
        <WordLink {...skillObjects.React} /> to build webpages personally and
        professionally.
      </>
    ),
  },
  'Web Development': {
    description: (
      <>
        Web development is the latest area of software development that I have
        taken on. With little experience until 2019 I saw web dev work as
        complicated and misaligned with my interests in logic. This changed when
        I worked for a education technology company, Amplify, where I learned
        about <WordLink {...skillObjects.React} punc="." /> React turned out to
        be the perfect blend of logic and UI for me. It beautifully combined{' '}
        <WordLink {...skillObjects.JavaScript} punc="," />{' '}
        <WordLink {...skillObjects.CSS} punc="," /> and{' '}
        <WordLink {...skillObjects.HTML} /> into a straight forward mechanism
        for building websites, and since then I&apos;ve been hooked on web
        development.
      </>
    ),
  },
  Infrastructure: {
    description: (
      <>
        Putting services on the cloud can be cumbersome, but after working with{' '}
        <WordLink {...skillObjects.AWS} /> in a professional setting, I became
        quite familiar with the tools of the trade. I launched API lambdas
        quickly with <WordLink {...skillObjects.Serverless} />, deployed
        webpages to S3 buckets using <WordLink {...skillObjects.Terraform} />{' '}
        built AWS Pipelines, and helped shrink down a frustratingly large
        Vagrant server into lightweight <WordLink {...skillObjects.Docker} />{' '}
        images.
      </>
    ),
  },
  'Version Control': {
    description: (
      <>
        Version control has likely become my favorite tool within software
        development. Managing new development branches with{' '}
        <WordLink {...skillObjects.git} punc="," /> tracking down when a bug
        arose by blaming in <WordLink {...skillObjects.GitHub} punc="," /> and
        hashing out differing thoughts on a PR all made for simple and effective
        collaboration between developers. No more are the days of manually
        searching through code changes between &quot;Project1&quot;,
        &quot;Project1_Final&quot;, &quot;Project1_Final2&quot; and so on.
      </>
    ),
  },
};

export const skillPageData = {
  Python: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I don&apos;t think that I can say it enough;
            I <Emoji symbol="❤" label="love" className="heart" /> Python! Like
            many people, I find it to be an incredibly easy language to work
            with. It makes prototyping new ideas incredibly quick, and offers so
            many tools to make data manipulation a breeze. I personally use it
            for scripts most of the time. When I have a large set of photos from
            a day of taking pictures, I can use a quickly written script to go
            through the photos in the directory to append or replace the file
            name for ease of management. It also allows for easy interfacing
            with command line calls, so to familiarize myself with that side of
            Python, I worked on my personal project{' '}
            <WordLink {...projectObjects['Program Snapshot']} />.
            <div className="new-line" />
            <div className="tab" />
            While working for Amplify, I use it a ton for our internal{' '}
            <WordLink {...skillObjects.Serverless} /> Authentication APIs which
            opened my eyes to the production value of Python. They were so quick
            to be built and changed when new requirements came through. I also
            used it for writing scripts to analyze and manipulate data contained
            in large CSV files. I was tasked with updating outdated tags and
            analyzing phonemes in our assessment texts. It was really neat to
            have a script that allowed me to apply my algorithms&apos; knowledge
            to figure out the most efficient way to work with the data.
            <div className="new-line" />
            <div className="tab" />
            Some people call Python &quot;pseudo code&quot;, but I see it
            something more than that. It&apos;s... production grade pseudo code.
          </>
        ),
      },
    ],
  },
  JavaScript: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />
            Until January 2019, I had never truly used JavaScript. I used
            scripts here and there for various things on the internet, but
            stayed away from writing it myself for the longest time.
            <div className="new-line" />
            <div className="tab" />
            Then along came my Web Development position at Amplify, and my usage
            of JavaScript boomed. I quickly learned it was similar in nature to{' '}
            <WordLink {...skillObjects.Python} /> with its ease of use and lack
            of typing, which made it an easy language for me to transition to. I
            ended up using it largely for the development of{' '}
            <WordLink {...skillObjects.React} /> webpages and components. The
            components I wrote were full of logic so I got familiar with many
            neat, helpful features at my disposal. Object destructuring? You got
            it. Map, Filter, and Reduce? You bet. Arrow functions? Ohhhh yeah!
            Bless{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/"
            >
              MDN
            </a>{' '}
            <Emoji symbol="🙏" label="pray" /> for all the new knowledge.
          </>
        ),
      },
    ],
  },
  'C#': {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I got really into C# in 2017 around the time
            of my &quot;Concepts of Parallel and Distributed Systems&quot;
            (CoPaDS) course. After spending so much time writing{' '}
            <WordLink {...skillObjects.Java} />, it was a nice change of pace to
            write something similar, but with friendlier syntax. Writing
            &quot;Console.WriteLine()&quot; vs &quot;System.out.println()&quot;
            just felt more user friendly. Silly example I&apos;m sure; however
            that, among other reasons, lead me to using it for some personal
            projects that I really enjoyed writing.
            <div className="new-line" />
            <div className="tab" />I took my final project from that CoPaDS
            course and used its core functionality as the beginning of my{' '}
            <WordLink {...projectObjects["Q'd Up"]} /> backend server. I later
            converted it to Java for consistency between itself and the Android
            app, but it <div className="italic">served</div> me well for quite
            some time. I then wrote my two Windows GUI programs{' '}
            <WordLink {...projectObjects.PictoCrypt} /> and{' '}
            <WordLink {...projectObjects['Clear Downloads']} /> in C# utilizing
            Visual Studio&apos;s easy front end development tools. Both were a
            ton of fun to write, and had few headaches attaching the backend to
            the front end.
          </>
        ),
      },
    ],
  },
  Java: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  AWS: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Terraform: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Serverless: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  Docker: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  git: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  GitHub: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  React: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  CSS: {
    discussion: [
      {
        title: null,
        description: (
          <>
            <div className="tab" />I used to be terrified of CSS. There are so
            many ways to make a certain style work, and which one to choose{' '}
            <Emoji symbol="🤯" label="mindblown" />. That actually later became
            the fun in it! I love having an idea in my mind of how a page should
            look or act, and spending some time trying to figure out what css
            patterns I should use to best manage the elements in my{' '}
            <WordLink {...skillObjects.HTML} /> hierarchy. While it can get
            complicated at times, finding a silver bullet that cleanly
            transforms a dingy page into a slick one is always a reward.
            <div className="new-line" />
            <div className="tab" />
            This entire site was styled with custom CSS. Getting the
            &quot;code&quot; to appear out of the background still blows my mind
            how simple it was to accomplish. I had never seen that done before,
            and it intrigues me with what else can be accomplished with simple
            class changes and transitions. I find that to be the beauty in CSS.
            Every moment I had tweaking it on this site felt like I was honing
            in closer and closer on my vision of this site.
          </>
        ),
      },
    ],
  },
  HTML: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
};
