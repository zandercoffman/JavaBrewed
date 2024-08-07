"use client"

import React, {useState, useEffect, useRef} from "react";

export default function Robot(params: any) {

    const [up, setUp] = useState(-0);
    const [hasDone, setHasDone] = useState(false);
    const [direction, setDirection] = useState(-20);
    const firstRender = useRef(true);
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        const targetUp = direction; // Target position you want to reach
        const animationStep = 1; // Step size for smooth animation
        const interval = setInterval(() => {
          if (up > targetUp) {
            setUp((prevUp) => prevUp - animationStep);
          } else {
            setUp(targetUp); // Ensure final position is exactly at targetUp
            clearInterval(interval); // Stop the interval once target is reached
          }
        }, 10); // Interval duration for smooth animation
    
        return () => clearInterval(interval); // Clean up interval on component unmount
      }, [direction, up]);

      useEffect(() => {
        if (params.hasTyped) {
            setDirection(0);
        } else {
            setDirection(-20);
        }
      }, [params.hasTyped])

     
    return <>
        <style jsx>{`
            #matrix1 {
                transform: matrix(0.577688, 0.816258, 0.846818, -0.531883, 545.922, 529.534);
                ${params.hasTyped && "animation-name: moveUp1;"}
            }

            #matrix2 {
                transform: matrix(-0.577688, 0.816258, -0.846818, -0.531883, 145.078, 518.925);
                ${params.hasTyped && "animation-name: moveUp2;"}
            }
        `
        }</style>
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="700" height="700" fill="#00000000" />
            <rect width="700" height="700" fill="#00000000" />
            <g filter="url(#filter0_d_0_1)">
                <path d="M237.224 156H365.197V350.673H237.224V156Z" fill="#D9D9D9" />
                <ellipse cx="250.439" cy="253.336" rx="66.7683" ry="97.3364" fill="#D9D9D9" />
                <path d="M457.512 156H329.54V350.673H457.512V156Z" fill="#D9D9D9" />
                <ellipse cx="66.7683" cy="97.3364" rx="66.7683" ry="97.3364" transform="matrix(-1 0 0 1 511.066 156)" fill="#D9D9D9" />
                <g filter="url(#filter1_d_0_1)">
                    <rect x="218.247" y="180.627" width="258.243" height="145.418" rx="24" fill="#BFBEBE" />
                </g>
                <g filter="url(#filter2_d_0_1)">
                    <ellipse cx="290.101" cy="246.886" rx="31.8752" ry="41.6318" fill="#D9D9D9" />
                    <path d="M321.476 246.886C321.476 258.283 317.939 268.581 312.243 276.021C306.548 283.459 298.715 288.018 290.101 288.018C281.487 288.018 273.654 283.459 267.959 276.021C262.263 268.581 258.726 258.283 258.726 246.886C258.726 235.49 262.263 225.191 267.959 217.752C273.654 210.313 281.487 205.755 290.101 205.755C298.715 205.755 306.548 210.313 312.243 217.752C317.939 225.191 321.476 235.49 321.476 246.886Z" stroke="url(#paint0_linear_0_1)" />
                </g>
                <g filter="url(#filter3_d_0_1)" style={{transition: "all 1s", transform: `translateY(${up}px)`}}>
                    <ellipse  cx="293.343" cy="260.959" rx="14.5869" ry="17.0045" fill="#B4B4B4" />
                    <path d="M307.43 260.959C307.43 270.149 301.053 277.464 293.343 277.464C285.632 277.464 279.256 270.149 279.256 260.959C279.256 251.769 285.632 244.455 293.343 244.455C301.053 244.455 307.43 251.769 307.43 260.959Z" stroke="url(#paint1_linear_0_1)" />
                </g>
                <g filter="url(#filter4_d_0_1)">
                    <ellipse cx="31.8752" cy="41.6318" rx="31.8752" ry="41.6318" transform="matrix(-1 0 0 1 436.511 205.255)" fill="#D9D9D9" />
                    <path d="M373.26 246.886C373.26 258.283 376.798 268.581 382.493 276.021C388.189 283.459 396.022 288.018 404.635 288.018C413.249 288.018 421.082 283.459 426.778 276.021C432.473 268.581 436.011 258.283 436.011 246.886C436.011 235.49 432.473 225.191 426.778 217.752C421.082 210.313 413.249 205.755 404.635 205.755C396.022 205.755 388.189 210.313 382.493 217.752C376.798 225.191 373.26 235.49 373.26 246.886Z" stroke="url(#paint2_linear_0_1)" />
                </g>
                <g filter="url(#filter5_d_0_1)" style={{transition: "all 1s", transform: `translateY(${up}px)`}}>
                    <ellipse cx="14.5869" cy="17.0045" rx="14.5869" ry="17.0045" transform="matrix(-1 0 0 1 415.981 243.955)" fill="#B4B4B4" />
                    <path d="M387.307 260.959C387.307 270.149 393.683 277.464 401.394 277.464C409.105 277.464 415.481 270.149 415.481 260.959C415.481 251.769 409.105 244.455 401.394 244.455C393.683 244.455 387.307 251.769 387.307 260.959Z" stroke="url(#paint3_linear_0_1)" />
                </g>
                <g filter="url(#filter6_d_0_1)">
                    <path d="M151.304 246.886L186.16 225.191L191.14 299.073L151.304 275.618V246.886Z" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter7_d_0_1)">
                    <rect x="113.959" y="261.545" width="37.3455" height="5.86364" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter8_d_0_1)">
                    <path d="M544.677 245.714L509.821 224.018L504.842 297.9L544.677 274.445V245.714Z" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter9_d_0_1)">
                    <rect width="37.3455" height="5.86364" transform="matrix(-1 0 0 1 582.023 260.373)" fill="#D9D9D9" />
                </g>
                <ellipse cx="334.297" cy="80.3591" rx="59.7528" ry="53.3591" fill="url(#paint4_linear_0_1)" />
                <g filter="url(#filter10_d_0_1)">
                    <path d="M360.102 119.49L378.193 151.604L308.482 151.429L333.119 117.712L360.102 119.49Z" fill="#D9D9D9" />
                </g>
                <g filter="url(#filter11_d_0_1)">
                    <rect width="33.0608" height="5.51872" transform="matrix(-0.0740237 0.997256 -0.997837 -0.065733 348.783 85.6126)" fill="url(#paint5_linear_0_1)" />
                </g>
                <g filter="url(#filter12_d_0_1)">
                    <path d="M330.563 293.795C345.594 299.184 354.339 298.943 370.398 293.795" stroke="#615454" />
                </g>
            </g>
            <rect x="311" y="351" width="74" height="54" fill="#D9D9D9" />
            <rect width="71.7231" height="56.263" transform="matrix(0.577688 0.816258 0.846818 -0.531883 545.922 529.534)" fill="#D9D9D9" id="matrix1" className="matrix"/>
            <rect width="71.7231" height="56.263" transform="matrix(-0.577688 0.816258 -0.846818 -0.531883 145.078 518.925)" fill="#D9D9D9" id="matrix2" className="matrix"/>
            <path d="M384.684 404.378L359.854 333.703L408.419 333.287L384.684 404.378Z" fill="#D9D9D9" />
            <path d="M309.537 404.378L284.708 333.703L333.272 333.287L309.537 404.378Z" fill="#D9D9D9" />
            <g filter="url(#filter13_d_0_1)">
                <rect x="104" y="601.805" width="489.226" height="70.1949" fill="#D9D9D9" />
            </g>
            <rect x="104" y="371.782" width="489.226" height="293.739" rx="39" fill="url(#paint6_linear_0_1)" />
            <text x="348.613" y="518.651" text-anchor="middle" dominant-baseline="middle" font-size="40">Hi</text>
            
            <defs>
                <filter id="filter0_d_0_1" x="109.959" y="27" width="476.064" height="331.673" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter1_d_0_1" x="214.247" y="180.627" width="266.243" height="153.418" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter2_d_0_1" x="254.226" y="205.255" width="71.7503" height="91.2636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter3_d_0_1" x="274.756" y="243.955" width="37.1739" height="42.0091" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter4_d_0_1" x="368.76" y="205.255" width="71.7503" height="91.2636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter5_d_0_1" x="382.807" y="243.955" width="37.1739" height="42.0091" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter6_d_0_1" x="147.304" y="225.191" width="47.8352" height="81.8818" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter7_d_0_1" x="109.959" y="261.545" width="45.3455" height="13.8636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter8_d_0_1" x="500.842" y="224.018" width="47.8352" height="81.8818" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter9_d_0_1" x="540.677" y="260.373" width="45.3455" height="13.8636" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter10_d_0_1" x="304.482" y="117.712" width="77.7118" height="41.8919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter11_d_0_1" x="336.829" y="85.2498" width="15.9541" height="41.3329" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter12_d_0_1" x="326.394" y="293.319" width="48.1566" height="12.9279" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter13_d_0_1" x="100" y="601.805" width="497.226" height="78.1949" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <filter id="filter14_d_0_1" x="272.469" y="449.496" width="136" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_0_1" x1="290.101" y1="205.255" x2="290.101" y2="288.518" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BFBEBE" />
                    <stop offset="1" stop-color="#666666" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1="293.343" y1="243.955" x2="293.343" y2="277.964" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BFBEBE" />
                    <stop offset="1" stop-color="#666666" />
                </linearGradient>
                <linearGradient id="paint2_linear_0_1" x1="404.635" y1="205.255" x2="404.635" y2="288.518" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BFBEBE" />
                    <stop offset="1" stop-color="#666666" />
                </linearGradient>
                <linearGradient id="paint3_linear_0_1" x1="401.394" y1="243.955" x2="401.394" y2="277.964" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#BFBEBE" />
                    <stop offset="1" stop-color="#666666" />
                </linearGradient>
                <linearGradient id="paint4_linear_0_1" x1="334.297" y1="27" x2="334.297" y2="133.718" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9" />
                    <stop offset="0.533464" stop-color="#A5A5A5" />
                    <stop offset="1" stop-color="#737373" />
                </linearGradient>
                <linearGradient id="paint5_linear_0_1" x1="0" y1="2.75936" x2="33.0608" y2="2.75936" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#737373" />
                    <stop offset="1" stop-color="#D9D9D9" />
                </linearGradient>
                <linearGradient id="paint6_linear_0_1" x1="348.613" y1="371.782" x2="348.613" y2="665.52" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#CDCBCB" />
                    <stop offset="0.297583" stop-color="#D9D9D9" />
                    <stop offset="0.308227" stop-color="#D9D9D9" />
                </linearGradient>
            </defs>
            <g filter="url(#filter14_d_0_1)">
                <text x="150" y="510" font-size="50" fill="black">♨️</text>
            </g>
        </svg>

    </>
}