import React from 'react';
import { createRoot } from 'react-dom/client';

const e = React.createElement;
const br = () => e('br');

const navigationItems = [
  { href: '#members', label: 'Members' },
  { href: '#activities', label: 'Activities' },
  { href: '#works', label: 'Works' },
  { href: '#join', label: 'Join Us' },
];

const menuCards = [
  { href: '#members', icon: '🎨', title: 'Members', description: 'メンバーのX・Pixivリンクとプロフィール。' },
  { href: '#activities', icon: '📅', title: 'Activities', description: '合同誌制作、イベント参加、Web企画など。' },
  { href: '#works', icon: '📚', title: 'Works', description: 'これまで発行した合同本の紹介。' },
  { href: '#join', icon: '🌟', title: 'Join Us', description: 'いっしょに本を作る仲間を募集中。' },
];

const works = [
  {
    cover: ['星降る', br(), 'スケッチブック'],
    title: '星降るスケッチブック',
    description: 'A5 / 40P / フルカラー合同イラスト本',
    tags: ['COMITIA', '創作'],
  },
  {
    cover: ['Dream', br(), 'Garden'],
    title: 'Dream Garden',
    description: '花と夢をテーマにした合同作品集。',
    tags: ['イラスト', '小説'],
  },
  {
    cover: ['Palette', br(), 'Party'],
    title: 'Palette Party',
    description: 'メンバーそれぞれの色を集めた一冊。',
    tags: ['合同誌', '通販あり'],
  },
];

const members = [
  { initial: 'A', name: 'Akari', description: '担当：イラスト。魔法少女と星空が好き。' },
  { initial: 'M', name: 'Mizuki', description: '担当：漫画。日常とファンタジーを描くよ。' },
  { initial: 'S', name: 'Sora', description: '担当：小説・編集。世界観設定が大好き。' },
];

const activities = [
  { date: '2026 Spring', title: '合同イラスト本制作', description: 'テーマを決めて、メンバーそれぞれが作品を制作。' },
  { date: '2026 Summer', title: 'イベント参加予定', description: '新刊頒布、既刊展示、ペーパー配布など。' },
  { date: '2026 Autumn', title: 'Web展示企画', description: 'サイト上でミニギャラリー企画を公開予定。' },
];

function Header() {
  return e('header', null,
    e('div', { className: 'header-inner' },
      e('a', { className: 'logo', href: '#top' }, 'Starry Atelier'),
      e('nav', { 'aria-label': 'メインナビゲーション' },
        navigationItems.map((item) => e('a', { key: item.href, href: item.href }, item.label)),
      ),
    ),
  );
}

function SectionTitle({ title, caption }) {
  return e('div', { className: 'section-title' },
    e('h2', null, title),
    e('span', null, caption),
  );
}

function Hero() {
  return e('section', { className: 'hero', id: 'top' },
    e('div', { className: 'hero-text' },
      e('h1', null, '創作を持ち寄る、', br(), '小さなアトリエ。'),
      e('p', null,
        'Starry Atelierは、イラスト・漫画・小説を中心に活動する合同同人サークル。',
        'それぞれの好きな世界を集めて、本や展示を作っているよ。',
      ),
      e('div', { className: 'hero-buttons' },
        e('a', { className: 'button primary', href: '#works' }, '既刊を見る'),
        e('a', { className: 'button secondary', href: '#join' }, 'メンバー募集'),
      ),
    ),
    e('div', { className: 'hero-visual', role: 'img', 'aria-label': 'Starry Atelierのキービジュアル' }),
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
        e('div', { className: 'book-cover' }, ...work.cover),
        e('div', { className: 'book-body' },
          e('h3', null, work.title),
          e('p', null, work.description),
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
        e('p', null, member.description),
        e('div', { className: 'sns' },
          e('a', { href: '#' }, 'X'),
          e('a', { href: '#' }, 'Pixiv'),
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
        e('div', { className: 'date' }, activity.date),
        e('div', null,
          e('strong', null, activity.title),
          e('p', null, activity.description),
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
        'イラスト、漫画、小説、デザイン、編集など、創作が好きな人を歓迎しているよ。',
        '活動ペースはゆるめ。無理なく楽しく、合同本やWeb企画を作っていくサークルだよ。',
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
