import React from 'react';

import WordLink from '../components/WordLink';
import { skillObjects } from './skills';

export const skillTagDefinitions = {
  Language: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈlaNGɡwij/',
    description: (
      <>
        I started working with programming languages in 2011 when I took my
        first <WordLink {...skillObjects.Java} /> course. I then spent the most
        of my time working with Java off and on again up until 2016 when I was
        formally introduced to <WordLink {...skillObjects.Python} /> and{' '}
        <WordLink {...skillObjects['C#']} punc="." /> Python quickly became my
        favorite language to work with because of its ease in prototyping and
        quick scripting. Most recently I have been using{' '}
        <WordLink {...skillObjects.Javascript} /> to work with{' '}
        <WordLink {...skillObjects.React} /> to build webpages personally and
        professionally.
      </>
    ),
  },
  'Web Development': {
    partOfSpeech: 'noun',
    pronunciation: '/web dəˈveləpmənt/',
    description: (
      <>
        Web development is the latest area of software development that I have
        taken on. With little experience until 2019 I saw web dev work as
        complicated and misaligned with my interests in logic. This changed when
        I worked for a education technology company, Amplify, where I learned
        about <WordLink {...skillObjects.React} punc="." /> React turned out to
        be the perfect blend of logic and UI for me. It beautifully combined{' '}
        <WordLink {...skillObjects.Javascript} punc="," />{' '}
        <WordLink {...skillObjects.CSS} punc="," /> and{' '}
        <WordLink {...skillObjects.HTML} /> into a straight forward mechanism
        for building websites, and since then I&apos;ve been hooked on web
        development.
      </>
    ),
  },
  Infrastructure: {
    partOfSpeech: 'noun',
    pronunciation: '/ˈinfrəˌstrək(t)SHər/',
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
    partOfSpeech: 'noun',
    pronunciation: '/ˈvərZHən kənˈtrōl/',
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
        description: <></>,
      },
    ],
  },
  Javascript: {
    discussion: [
      {
        title: null,
        description: <></>,
      },
    ],
  },
  'C#': {
    discussion: [
      {
        title: null,
        description: <></>,
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
        description: <></>,
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
