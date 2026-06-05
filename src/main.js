import React from 'react';
import { createRoot } from 'react-dom/client';

const e = React.createElement;
const br = () => e('br');

function withLineBreaks(content) {
  const parts = Array.isArray(content) ? content : String(content).split('\n');
  return parts.flatMap((part, index) => (
    index === 0 ? [part] : [br(), part]
  ));
}

const navigationItems = [
  { href: '#members', label: 'Members' },
  { href: '#activities', label: 'Activities' },
  { href: '#works', label: 'Works' },
  { href: '#join', label: 'Join Us' },
];

const menuCards = [
  { href: '#members', icon: '01', title: 'Members', description: 'メンバーのX・Pixivリンクとプロフィール。' },
  { href: '#activities', icon: '02', title: 'Activities', description: '合同誌制作、イベント参加など。' },
  { href: '#works', icon: '03', title: 'Works', description: 'これまで発行した合同本の紹介。' },
  { href: '#join', icon: '04', title: 'Join Us', description: 'いっしょに本を作る仲間を募集中。' },
];

const works = [
  {
    cover: ['白本'],
    title: '白本',
    description: 'A5 / ?P / モノクロ\n記念すべき一冊目。\n参加メンバー：',
    tags: ['COMITIA', '創作'],
  },
  {
    cover: ['赤本'],
    title: '赤本',
    description: 'A5 / ?P / モノクロ\n参加メンバー：',
    tags: ['COMITIA', '創作'],
  },
  {
    cover: ['黒本'],
    title: '黒本',
    description: 'A5 / ?P / モノクロ\n参加メンバー：',
    tags: ['COMITIA', '創作'],
  },
];

const members = [
  {
    initial: 'サムネ',
    name: 'のこう',
    description: '[自己紹介]',
    links: [
      { label: 'X', href: '#' },
      { label: 'Pixiv', href: '#' },
      { label: 'Website', href: '#' },
    ],
  },
  {
    initial: 'サムネ',
    name: 'めあり',
    description: '[自己紹介]',
    links: [
      { label: 'X', href: '#' },
      { label: 'Portfolio', href: '#' },
    ],
  },
  {
    initial: 'サムネ',
    name: 'きりいろ',
    description: '[自己紹介]',
    links: [
      { label: 'X', href: '#' },
      { label: 'Pixiv', href: '#' },
    ],
  },
  {
    initial: 'サムネ',
    name: 'たつたあげ',
    description: '[自己紹介]',
    links: [
      { label: 'X', href: '#' },
    ],
  },
  {
    initial: 'サムネ',
    name: '外道',
    description: '[自己紹介]',
    links: [
      { label: 'Website', href: '#' },
      { label: 'Booth', href: '#' },
    ],
  },
  {
    initial: 'サムネ',
    name: 'package.lock.json',
    description: '[自己紹介]',
    links: [],
  },
];

const activities = [
  { date: '2026 Spring', title: '合同イラスト本制作', description: 'テーマを決めて、メンバーそれぞれが作品を制作。（適当）' },
  { date: '2026 Summer', title: 'イベント参加予定', description: '新刊頒布、既刊展示、ペーパー配布など。（適当）' },
  { date: '2026 Autumn', title: 'Web展示企画', description: 'サイト上でミニギャラリー企画を公開予定。（適当）' },
];

function Header() {
  return e('header', null,
    e('div', { className: 'header-inner' },
      e('a', { className: 'logo', href: '#top' }, '[サークル名]'),
      e('nav', { 'aria-label': 'メインナビゲーション' },
        navigationItems.map((item) => e('a', { key: item.href, href: item.href }, item.label)),
      ),
    ),
  );
}

function SectionTitle({ title, caption }) {
  return e('div', { className: 'section-title' },
    e('span', { className: 'section-caption' }, caption),
    e('div', { className: 'section-heading' },
      e('h2', null, title),
      e('span', { className: 'section-rule', 'aria-hidden': 'true' }),
    ),
  );
}

function Hero() {
  return e('section', { className: 'hero', id: 'top' },
    e('div', { className: 'hero-text' },
      e('p', { className: 'hero-kicker' }, 'Doujin Circle / Illustration / Manga / Novel'),
      e('h1', null, 'これが俺の、', br(), '最強だ。'),
      e('p', null, ...withLineBreaks('[サークル名]は、漫画・小説を中心に活動する合同同人サークル。\n気の向くままに作った、メンバーそれぞれの最強の作品を集めて本にしています。\n\nまた、作品作りが終わったら講評会を実施。Discordの雑談チャネルで作品作りの相談も。\nメンバー同士で切磋琢磨しながら、創作を行っています。')),
      e('div', { className: 'hero-buttons' },
        e('a', { className: 'button primary', href: '#works' }, '既刊を見る'),
        e('a', { className: 'button secondary', href: '#join' }, 'メンバー募集'),
      ),
    ),
    e('div', { className: 'hero-visual-wrap' },
      e('div', { className: 'hero-visual', role: 'img', 'aria-label': '[サークル名]のキービジュアル' }),
      e('div', { className: 'hero-panel' },
        e('span', null, 'Featured'),
        e('strong', null, '2026/10 関西コミティア'),
        e('p', null, '制作中'),
      ),
    ),
  );
}

function MenuCards() {
  return e('section', { 'aria-label': 'サイトメニュー' },
    e('div', { className: 'menu-cards' },
      menuCards.map((card) => e('a', { className: 'menu-card', href: card.href, key: card.href },
        e('div', { className: 'icon', 'aria-hidden': 'true' }, card.icon),
        e('h3', null, card.title),
        e('p', null, card.description),
      )),
    ),
  );
}

function Works() {
  return e('section', { id: 'works' },
    e(SectionTitle, { title: 'Works', caption: '既刊の合同本' }),
    e('div', { className: 'works-grid' },
      works.map((work) => e('article', { className: 'book-card', key: work.title },
        e('div', { className: 'book-cover' },
          e('span', { className: 'book-index' }, work.tags[0]),
          ...withLineBreaks(work.cover),
        ),
        e('div', { className: 'book-body' },
          e('h3', null, work.title),
          e('p', null, ...withLineBreaks(work.description)),
          work.tags.map((tag) => e('span', { className: 'tag', key: tag }, tag)),
        ),
      )),
    ),
  );
}

function Members() {
  return e('section', { id: 'members' },
    e(SectionTitle, { title: 'Members', caption: 'メンバー紹介' }),
    e('div', { className: 'members-grid' },
      members.map((member) => e('article', { className: 'member-card', key: member.name },
        e('div', { className: 'member-icon', 'aria-hidden': 'true' }, member.initial),
        e('h3', null, member.name),
        e('p', null, ...withLineBreaks(member.description)),
        member.links?.length > 0 && e('div', { className: 'sns' },
          member.links.map((link) => e('a', {
            key: link.label,
            href: link.href,
            target: '_blank',
            rel: 'noreferrer',
          }, link.label)),
        ),
      )),
    ),
  );
}

function Activities() {
  return e('section', { id: 'activities' },
    e(SectionTitle, { title: 'Activities', caption: '活動内容' }),
    e('div', { className: 'timeline' },
      activities.map((activity) => e('div', { className: 'timeline-item', key: activity.date },
        e('div', { className: 'date' },
          e('span', null, 'Schedule'),
          activity.date,
        ),
        e('div', null,
          e('strong', null, activity.title),
          e('p', null, ...withLineBreaks(activity.description)),
        ),
      )),
    ),
  );
}

function Join() {
  return e('section', { id: 'join' },
    e(SectionTitle, { title: 'Join Us', caption: 'メンバー募集' }),
    e('div', { className: 'join-box' },
      e('h3', null, 'いっしょに創作する仲間を募集中！'),
      e('p', null,
        'イラスト、漫画、小説、デザイン、編集など、創作が好きな人を歓迎しています！',
        '活動ペースはゆるめ。無理なく楽しく、合同本を作っていくサークルです。',
      ),
      e('a', { className: 'button primary', href: '#' }, '応募・お問い合わせ'),
    ),
  );
}

function App() {
  return e(React.StrictMode, null,
    e(Header),
    e('main', null,
      e(Hero),
      e(MenuCards),
      e(Works),
      e(Members),
      e(Activities),
      e(Join),
    ),
    e('footer', null, '© Starry Atelier / Since 2026'),
  );
}

createRoot(document.getElementById('root')).render(e(App));
