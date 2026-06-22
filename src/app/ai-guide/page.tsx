import { legalUpdatedAt } from "@/lib/legal-content";
import Link from "next/link";

export default function AiGuidePage() {
  return (
    <main className="legalPage">
      <Link className="legalBack" href="/">Study Draftに戻る</Link>
      <header className="legalHero">
        <p className="eyebrow">Guide</p>
        <h1>AI利用・剽窃防止ガイド</h1>
        <p>最終更新日：{legalUpdatedAt}</p>
      </header>

      <section className="legalSection">
        <h2>Study Draftが手伝えること</h2>
        <ul>
          <li>課題内容やPDFから、レポートに使えそうな論点を整理すること。</li>
          <li>複数のプランや構成案を作り、書き始めやすくすること。</li>
          <li>参考文献候補、引用形式、本文中引用の確認を補助すること。</li>
          <li>下書きを作り、あとで自分の言葉に直すための土台を作ること。</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>必ず自分で行うこと</h2>
        <ul>
          <li>授業でAI利用が認められているか確認すること。</li>
          <li>AI出力を読み、内容を理解し、自分の主張として修正すること。</li>
          <li>引用した資料の本文、ページ番号、参考文献形式を確認すること。</li>
          <li>読んでいない資料を読んだように書かないこと。</li>
        </ul>
      </section>

      <section className="legalSection">
        <h2>避けるべき使い方</h2>
        <ul>
          <li>生成された下書きをそのまま提出すること。</li>
          <li>出典やページ番号を確認せずに引用すること。</li>
          <li>他人のPDFや授業資料を権限なく使うこと。</li>
          <li>AI利用を隠す必要がある課題で、ルールを確認せず使うこと。</li>
        </ul>
      </section>
    </main>
  );
}
