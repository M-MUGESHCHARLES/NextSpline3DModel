// 'use client';
import Spline from "@splinetool/react-spline/next";
import './index.css';

export default function SplineScene() {
  return (
    <main className="pt-0" id='spline_container'>
      <Spline scene="https://prod.spline.design/3tGI6aC2AKvib7M5/scene.splinecode" />
    </main>
  );
}
