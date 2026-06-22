import { legalUpdatedAt } from "@/lib/legal-content";
import Link from "next/link";

type PageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

const jaSections = [
  {
    title: "第1条 適用",
    body: [
      "本規約は、Study Draftが提供するレポート作成支援サービスの利用条件を定めるものです。",
      "AI利用ガイド、PDFアップロード注意事項、プライバシーポリシー、その他本サービス上の注意書きは、本規約とあわせて適用されます。"
    ]
  },
  {
    title: "第2条 本サービスの内容",
    body: [
      "本サービスは、レポートテーマ、課題内容、PDF資料、参考文献候補、構成案、下書き、文章改善などを整理するための補助機能を提供します。",
      "本サービスは、レポート提出代行、成績保証、剽窃支援、不正行為支援を目的とするものではありません。"
    ]
  },
  {
    title: "第3条 ユーザーの責任",
    body: [
      "ユーザーは、大学、授業、教員が定めるAI利用ルールを自ら確認し、それに従うものとします。",
      "ユーザーは、生成された内容、引用、参考文献、ページ番号、引用形式、事実関係を提出前に自ら確認するものとします。",
      "生成物は下書きまたは参考案であり、ユーザーは自分の言葉で修正して利用するものとします。"
    ]
  },
  {
    title: "第4条 未成年者の利用",
    body: [
      "未成年者が本サービスを利用する場合、必要に応じて保護者その他法定代理人の同意を得るものとします。",
      "未成年者は、学校、授業、保護者等の指示に反する方法で本サービスを利用してはなりません。"
    ]
  },
  {
    title: "第5条 AI利用・剽窃防止",
    body: [
      "ユーザーは、生成物を確認・修正せずそのまま提出してはなりません。",
      "ユーザーは、読んでいない文献を読んだように見せる行為、出典、引用、ページ番号、参考文献を捏造する行為をしてはなりません。",
      "ユーザーは、AI検出回避、剽窃隠し、不正提出、大学や授業で禁止されている方法でのAI利用を目的として本サービスを利用してはなりません。"
    ]
  },
  {
    title: "第6条 PDFアップロード",
    body: [
      "ユーザーは、自分が利用する権限を持つPDFのみをアップロードするものとします。",
      "有料論文、書籍PDF、授業資料、個人情報や機密情報を含む資料は、権限や利用許可を確認したうえで利用してください。",
      "PDF要約やテーマ抽出は内容理解の補助であり、正確な引用、ページ番号、権利処理を保証するものではありません。"
    ]
  },
  {
    title: "第7条 禁止事項",
    body: [
      "ユーザーは、法令または公序良俗に反する行為、第三者の権利を侵害する行為、他人になりすます行為をしてはなりません。",
      "ユーザーは、個人情報、機密情報、第三者の未公開情報を不用意に入力またはアップロードしてはなりません。",
      "ユーザーは、不正アクセス、セキュリティ回避、過度な負荷、リバースエンジニアリング、無断の商用転用、再販売、競合サービス開発のための利用をしてはなりません。"
    ]
  },
  {
    title: "第8条 入力データおよび生成物",
    body: [
      "入力データに関する権利は、ユーザーまたは正当な権利者に帰属します。",
      "生成物の利用責任はユーザーが負うものとします。",
      "AIの性質上、他のユーザーに類似した生成物が出力される場合があります。"
    ]
  },
  {
    title: "第9条 情報管理",
    body: [
      "Study Draftは、ユーザーの情報の漏洩、滅失、毀損、不正アクセスを防止するため、合理的な安全管理措置を講じるよう努めます。",
      "PDF本文および生成履歴は、原則としてサーバーに保存しません。",
      "将来、データベース保存機能を導入する場合、保存期間は原則1週間とし、本規約またはプライバシーポリシーで明示します。"
    ]
  },
  {
    title: "第10条 第三者サービス",
    body: [
      "本サービスは、AI生成、PDF解析、参考文献検索、アクセス解析、ホスティング等のため、外部APIまたは第三者サービスを利用する場合があります。",
      "第三者サービスには、それぞれの利用規約、プライバシーポリシー、制限事項が適用される場合があります。"
    ]
  },
  {
    title: "第11条 知的財産権",
    body: [
      "本サービスの画面、プログラム、デザイン、ロゴ、文章、機能、その他本サービスに関する知的財産権は、Study Draftまたは正当な権利者に帰属します。",
      "ユーザーは、Study Draftの許可なく、本サービスの内容を複製、転載、販売、再配布、改変、解析してはなりません。"
    ]
  },
  {
    title: "第12条 サービスの変更・停止",
    body: [
      "Study Draftは、機能改善、保守、障害対応、外部APIの仕様変更、セキュリティ対応、運営上の理由により、本サービスの全部または一部を変更、停止、終了することがあります。"
    ]
  },
  {
    title: "第13条 保証の否認・免責",
    body: [
      "本サービスは現状有姿で提供され、正確性、完全性、有用性、特定目的への適合性、継続的な提供、エラーがないことを保証しません。",
      "Study Draftは、AI出力、参考文献候補、PDF要約、引用形式、ページ番号、下書き内容が正確であることを保証しません。",
      "法令上認められる範囲で、Study Draftは本サービスの利用により生じた学業上、法的、経済的、その他の損害について責任を負いません。"
    ]
  },
  {
    title: "第14条 規約の変更",
    body: [
      "Study Draftは、必要に応じて本規約を変更できます。重要な変更がある場合は、本サービス上で通知します。",
      "変更後にユーザーが本サービスを利用した場合、変更後の規約に同意したものとみなします。"
    ]
  },
  {
    title: "第15条 準拠法・管轄",
    body: [
      "本規約は日本法に準拠します。本サービスに関して紛争が生じた場合、日本の裁判所を管轄裁判所とします。"
    ]
  },
  {
    title: "第16条 問い合わせ",
    body: [
      "問い合わせ窓口は、今後本サービス上に設置する予定です。現時点では、個別の問い合わせ先は設置していません。"
    ]
  }
];

const enSections = [
  {
    title: "Article 1. Scope",
    body: [
      "These Terms set out the conditions for using the report-writing support service provided by Study Draft.",
      "AI usage guides, PDF upload notices, the Privacy Policy, and other notices in the Service apply together with these Terms."
    ]
  },
  {
    title: "Article 2. Service",
    body: [
      "The Service helps users organize report themes, assignment details, PDF material, reference candidates, outlines, drafts, and revision ideas.",
      "The Service is not a report submission service, grade guarantee, plagiarism tool, or academic misconduct tool."
    ]
  },
  {
    title: "Article 3. User Responsibility",
    body: [
      "Users must check and follow the AI use rules set by their university, course, or instructor.",
      "Before submission, users must check generated content, citations, references, page numbers, citation styles, and factual accuracy themselves.",
      "Generated output is a draft or reference idea. Users must revise it in their own words."
    ]
  },
  {
    title: "Article 4. Minors",
    body: [
      "Minors must obtain consent from a parent or legal guardian where necessary.",
      "Minors must not use the Service in a way that conflicts with school, course, or guardian instructions."
    ]
  },
  {
    title: "Article 5. AI Use and Plagiarism Prevention",
    body: [
      "Users must not submit generated output as-is without checking and revising it.",
      "Users must not pretend to have read sources they have not read, or fabricate sources, citations, page numbers, or references.",
      "Users must not use the Service for AI detection evasion, hiding plagiarism, improper submission, or any AI use prohibited by their university or course."
    ]
  },
  {
    title: "Article 6. PDF Uploads",
    body: [
      "Users may upload only PDFs they are authorized to use.",
      "Paid papers, book PDFs, course materials, and files containing personal or confidential information must be used only after confirming permission.",
      "PDF summaries and theme extraction are assistive and do not guarantee accurate quotations, page numbers, or rights clearance."
    ]
  },
  {
    title: "Article 7. Prohibited Conduct",
    body: [
      "Users must not violate laws, public order, or third-party rights, or impersonate another person.",
      "Users must not carelessly enter or upload personal information, confidential information, or unpublished third-party information.",
      "Users must not engage in unauthorized access, security bypassing, excessive load, reverse engineering, unauthorized commercial reuse, resale, or competing service development."
    ]
  },
  {
    title: "Article 8. Input Data and Generated Output",
    body: [
      "Rights to input data remain with the user or lawful rights holder.",
      "Users are responsible for how they use generated output.",
      "Because of the nature of AI, similar output may be generated for other users."
    ]
  },
  {
    title: "Article 9. Information Management",
    body: [
      "Study Draft works to take reasonable security measures to prevent leakage, loss, damage, and unauthorized access to user information.",
      "PDF text and generation history are not stored on the server in principle.",
      "If database storage is introduced in the future, the retention period will be one week in principle and will be disclosed in these Terms or the Privacy Policy."
    ]
  },
  {
    title: "Article 10. Third-Party Services",
    body: [
      "The Service may use external APIs or third-party services for AI generation, PDF analysis, reference search, analytics, hosting, and related functions.",
      "Each third-party service may have its own terms, privacy policy, and limitations."
    ]
  },
  {
    title: "Article 11. Intellectual Property",
    body: [
      "Intellectual property rights related to the Service, including screens, programs, designs, logos, text, and functions, belong to Study Draft or lawful rights holders.",
      "Users must not copy, reproduce, sell, redistribute, modify, or analyze the Service without permission from Study Draft."
    ]
  },
  {
    title: "Article 12. Changes or Suspension",
    body: [
      "Study Draft may change, suspend, or terminate all or part of the Service for improvements, maintenance, system failures, external API changes, security response, or operational reasons."
    ]
  },
  {
    title: "Article 13. Disclaimer",
    body: [
      "The Service is provided as-is and does not guarantee accuracy, completeness, usefulness, fitness for a particular purpose, continuous availability, or error-free operation.",
      "Study Draft does not guarantee the accuracy of AI outputs, reference candidates, PDF summaries, citation styles, page numbers, or draft content.",
      "To the extent permitted by law, Study Draft is not liable for academic, legal, economic, or other damages arising from use of the Service."
    ]
  },
  {
    title: "Article 14. Changes to Terms",
    body: [
      "Study Draft may change these Terms as necessary. Important changes will be announced in the Service.",
      "If a user continues using the Service after changes, the user is deemed to have agreed to the updated Terms."
    ]
  },
  {
    title: "Article 15. Governing Law and Jurisdiction",
    body: [
      "These Terms are governed by the laws of Japan. Any dispute relating to the Service will be subject to the jurisdiction of the courts of Japan."
    ]
  },
  {
    title: "Article 16. Contact",
    body: [
      "A contact channel will be provided in the Service in the future. At present, no individual contact address is available."
    ]
  }
];

export default async function TermsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const isEnglish = params?.lang === "en";
  const sections = isEnglish ? enSections : jaSections;

  return (
    <main className="legalPage">
      <Link className="legalBack" href="/">{isEnglish ? "Back to Study Draft" : "Study Draftに戻る"}</Link>
      <header className="legalHero">
        <p className="eyebrow">Legal</p>
        <h1>{isEnglish ? "Study Draft Terms of Service" : "Study Draft 利用規約"}</h1>
        <p>{isEnglish ? `Last updated: ${legalUpdatedAt}` : `最終更新日：${legalUpdatedAt}`}</p>
        <p>
          {isEnglish
            ? "These Terms of Service set out the conditions for using Study Draft. By using the Service, the user agrees to these Terms."
            : "この利用規約は、Study Draftが提供するレポート作成支援サービスの利用条件を定めるものです。ユーザーは、本規約に同意したうえで本サービスを利用するものとします。"}
        </p>
      </header>

      {sections.map((section) => (
        <section className="legalSection" key={section.title}>
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </main>
  );
}
