import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Share Example - My NextJS App",
  description:
    "This page demonstrates how to up OpenGraph and Twitter Card meta tags using the Head component in NextJS.",
  openGraph: {
    title: "파란색 곰",
    description: "파란색 곰 이미지입니다. :)",
    type: "website",
    images: [
      {
        url: "/sample.jpg",
        width: 512,
        height: 512,
        alt: "파란색 곰 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "파란색 곰",
    description: "파란색 곰 이미지입니다. :)",
    images: ["/image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">Social Share Example</h1>
      <p className="mt-4 text-lg text-gray-600">
        이 페이지는 Head 컴포넌트를 사용해 OpenGraph 및 Twitter Card meta 태그를
        설정하는 방법을 보여줍니다.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        참고: 메타 태그는 페이지가 배포된 후에 적용됩니다. 페이지를 배포한 후,
        Facebook Sharing Debugger나 Twitter Card Validator와 같은 도구로
        미리보기를 확인하세요.
      </p>
      <div className="mt-8">
        <img
          src="/sample.jpg"
          alt="Sample Image for Social Sharing"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </main>
  );
}
