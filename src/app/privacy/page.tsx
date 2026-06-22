import { contactEmail, legalUpdatedAt } from "@/lib/legal-content";
import Link from "next/link";

type PageProps = {
  searchParams?: Promise<{ lang?: string }>;
};

const jaSections = [
  {
    title: "第1条 基本方針",
    body: [
      "Study Draftは、ユーザーの情報の重要性を認識し、個人情報保護法その他関連法令を遵守し、取得した情報を適切に取り扱います。",
      "本サービスは、レポート作成を補助するために必要な範囲でのみ情報を取り扱います。"
    ]
  },
  {
    title: "第2条 取得する情報",
    body: [
      "本サービスは、ユーザーが入力した名前またはメールアドレス、レポートテーマ、課題内容、レポートに含めたい内容、追加条件を取得する場合があります。",
      "本サービスは、アップロードされたPDF、PDFから抽出されたテキスト、要約、重要テーマ、生成された内容候補、プラン、参考文献候補、構成案、下書き、改善案を処理する場合があります。",
      "本サービスは、引用形式、選択した参考文献、PDFテーマ、生成設定、利用イベント、アクセス情報、エラー情報、ブラウザに保存される履歴情報を取得する場合があります。"
    ]
  },
  {
    title: "第3条 取得方法",
    body: [
      "本サービスは、ユーザーによるフォーム入力、PDFアップロード、サービス利用時に自動送信されるイベント情報、ブラウザ保存機能等により情報を取得します。"
    ]
  },
  {
    title: "第4条 利用目的",
    body: [
      "取得した情報は、本サービスの提供、本人識別、履歴表示、レポート材料の整理、PDF読み取り、AI生成、参考文献検索、生成結果の表示、コピー、保存、再利用のために利用します。",
      "取得した情報は、不具合調査、エラー対応、セキュリティ確保、利用状況の分析、機能改善、品質改善、不正利用や過剰利用の防止のために利用します。"
    ]
  },
  {
    title: "第5条 原則として保存しない情報",
    body: [
      "PDF本文および生成履歴は、原則としてサーバーに保存しません。",
      "ユーザーのブラウザに保存される履歴は、ユーザー自身が削除できます。",
      "将来、データベース保存機能を導入する場合、保存期間は原則1週間とします。"
    ]
  },
  {
    title: "第6条 第三者サービス",
    body: [
      "本サービスは、AI生成、PDF解析、参考文献検索、アクセス解析、ホスティング等のため、OpenAI、Vercel、その他外部サービスを利用する場合があります。",
      "外部サービスには、それぞれの利用規約、プライバシーポリシー、データ処理条件が適用される場合があります。"
    ]
  },
  {
    title: "第7条 第三者提供",
    body: [
      "Study Draftは、法令に基づく場合、ユーザーの同意がある場合、サービス提供に必要な外部サービスを利用する場合を除き、個人情報を第三者に提供しません。"
    ]
  },
  {
    title: "第8条 安全管理措置",
    body: [
      "Study Draftは、取得した情報の漏洩、滅失、毀損、不正アクセスを防止するため、合理的な安全管理措置を講じるよう努めます。",
      "APIキーや秘密情報をブラウザ側に露出させず、外部APIとの通信はサーバー側で行う設計とします。",
      "Analyticsには、レポート本文やPDF本文などの内容そのものを送信しない設計とします。"
    ]
  },
  {
    title: "第9条 Cookie・Analytics",
    body: [
      "本サービスは、利用状況の把握、機能改善、不具合調査のため、Cookieまたは類似技術、Vercel Analytics等を利用する場合があります。",
      "広告を導入する場合、Google AdSense、Google Ad Managerその他の第三者広告サービスが、広告配信、広告効果測定、不正防止、パーソナライズ広告または非パーソナライズ広告のためにCookieまたは類似技術を利用する場合があります。",
      "ユーザーは、Googleの広告設定等を通じてパーソナライズ広告を管理できる場合があります。",
      "本サービスは、広告、Analytics、利用状況分析に、レポート本文、PDF本文、テーマ文、参考文献タイトルなどの内容そのものを送信しない設計に努めます。"
    ]
  },
  {
    title: "第10条 入力しないでほしい情報",
    body: [
      "ユーザーは、住所、電話番号、学籍番号、成績情報、パスワード、認証情報、APIキー、第三者の個人情報、機密資料、未公開研究、営業秘密、権限のないPDF、授業資料、有料資料を入力またはアップロードしないでください。"
    ]
  },
  {
    title: "第11条 未成年者の情報",
    body: [
      "未成年者が本サービスを利用する場合、必要に応じて保護者その他法定代理人の同意を得るものとします。",
      "本サービスは、未成年者の利用を想定し、過度な個人情報の入力を求めない設計に努めます。"
    ]
  },
  {
    title: "第12条 開示・訂正・削除等",
    body: [
      `ユーザーが個人情報の開示、訂正、削除、利用停止等を希望する場合、${contactEmail} までご連絡ください。`,
      "本人確認や対象情報の確認のため、必要な範囲で追加情報の提供をお願いする場合があります。"
    ]
  },
  {
    title: "第13条 変更",
    body: [
      "Study Draftは、機能追加、法令変更、外部サービスの仕様変更、運営上の理由により、本ポリシーを変更することがあります。重要な変更がある場合は、本サービス上で通知します。"
    ]
  }
];

const enSections = [
  {
    title: "Article 1. Basic Policy",
    body: [
      "Study Draft recognizes the importance of user information and handles acquired information appropriately in compliance with applicable privacy laws.",
      "The Service handles information only to the extent necessary to support report writing."
    ]
  },
  {
    title: "Article 2. Information Collected",
    body: [
      "The Service may collect names or email addresses entered by users, report themes, assignment details, content to include, and additional conditions.",
      "The Service may process uploaded PDFs, text extracted from PDFs, summaries, important themes, generated content points, plans, reference candidates, outlines, drafts, and revision ideas.",
      "The Service may collect citation styles, selected references, selected PDF themes, generation settings, usage events, access information, error information, and browser-stored history."
    ]
  },
  {
    title: "Article 3. Collection Method",
    body: [
      "The Service collects information through user form input, PDF upload, automatically sent event information during use, and browser storage."
    ]
  },
  {
    title: "Article 4. Purpose of Use",
    body: [
      "Information is used to provide the Service, identify the user, display history, organize report material, read PDFs, generate AI output, search references, display results, copy, save, and reuse results.",
      "Information is also used for bug investigation, error handling, security, usage analysis, feature improvement, quality improvement, and prevention of abuse or excessive use."
    ]
  },
  {
    title: "Article 5. Information Not Stored in Principle",
    body: [
      "PDF text and generation history are not stored on the server in principle.",
      "Browser-stored history can be deleted by the user.",
      "If database storage is introduced in the future, the retention period will be one week in principle."
    ]
  },
  {
    title: "Article 6. Third-Party Services",
    body: [
      "The Service may use OpenAI, Vercel, and other external services for AI generation, PDF analysis, reference search, analytics, hosting, and related functions.",
      "Each external service may have its own terms, privacy policy, and data processing conditions."
    ]
  },
  {
    title: "Article 7. Third-Party Disclosure",
    body: [
      "Study Draft does not provide personal information to third parties except where required by law, with user consent, or where necessary to provide the Service through external services."
    ]
  },
  {
    title: "Article 8. Security Measures",
    body: [
      "Study Draft works to take reasonable security measures to prevent leakage, loss, damage, and unauthorized access to acquired information.",
      "API keys and secret information are not exposed to browser-side code, and external API communication is handled server-side.",
      "Analytics is designed not to send report text, PDF text, or similar content itself."
    ]
  },
  {
    title: "Article 9. Cookies and Analytics",
    body: [
      "The Service may use cookies or similar technologies and Vercel Analytics to understand usage, improve features, and investigate issues.",
      "If advertising is introduced, Google AdSense, Google Ad Manager, or other third-party advertising services may use cookies or similar technologies for ad delivery, ad measurement, abuse prevention, and personalized or non-personalized ads.",
      "Users may be able to manage personalized ads through Google's ad settings or similar controls.",
      "The Service works to avoid sending report text, PDF text, theme text, reference titles, or similar content itself to advertising, analytics, or usage analysis tools."
    ]
  },
  {
    title: "Article 10. Information Users Should Not Enter",
    body: [
      "Users should not enter or upload addresses, phone numbers, student IDs, grade information, passwords, authentication information, API keys, personal information of third parties, confidential materials, unpublished research, trade secrets, unauthorized PDFs, course materials, or paid materials."
    ]
  },
  {
    title: "Article 11. Information of Minors",
    body: [
      "If a minor uses the Service, the minor must obtain consent from a parent or legal guardian where necessary.",
      "The Service assumes that minors may use it and works to avoid requesting excessive personal information."
    ]
  },
  {
    title: "Article 12. Disclosure, Correction, and Deletion",
    body: [
      `If users wish to request disclosure, correction, deletion, or suspension of use of their personal information, contact ${contactEmail}.`,
      "Additional information may be requested as necessary to verify the requester and identify the relevant information."
    ]
  },
  {
    title: "Article 13. Changes",
    body: [
      "Study Draft may change this Policy due to feature additions, legal changes, external service changes, or operational reasons. Important changes will be announced in the Service."
    ]
  }
];

export default async function PrivacyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const isEnglish = params?.lang === "en";
  const sections = isEnglish ? enSections : jaSections;

  return (
    <main className="legalPage">
      <Link className="legalBack" href="/">{isEnglish ? "Back to Study Draft" : "Study Draftに戻る"}</Link>
      <header className="legalHero">
        <p className="eyebrow">Privacy</p>
        <h1>{isEnglish ? "Study Draft Privacy Policy" : "Study Draft プライバシーポリシー"}</h1>
        <p>{isEnglish ? `Last updated: ${legalUpdatedAt}` : `最終更新日：${legalUpdatedAt}`}</p>
        <p>
          {isEnglish
            ? "Study Draft establishes this Privacy Policy to describe how user information is handled."
            : "Study Draftは、ユーザーの情報を適切に取り扱うため、以下のとおりプライバシーポリシーを定めます。"}
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
