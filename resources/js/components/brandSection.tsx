import * as React from "react";

// components
import BrandLogo from "@/components/brandLogo";

// images
import reactBrandLogo from "@/images/logos/brand/react-brand-logo.png";
import wordpressBrandLogo from "@/images/logos/brand/wordpress-brand-logo.png";
import laravelBrandLogo from "@/images/logos/brand/laravel-brand-logo.png";
import tsBrandLogo from "@/images/logos/brand/ts-brand-logo.png";
import tailwindcssBrandLogo from "@/images/logos/brand/tailwindcss-brand-logo.png";
import jQueryBrandLogo from "@/images/logos/brand/jquery-brand-logo.png";
import javascriptBrandLogo from "@/images/logos/brand/javascript-brand-logo.png";
import phpBrandLogo from "@/images/logos/brand/php-brand-logo.png";
import figmaBrandLogo from "@/images/logos/brand/figma-brand-logo.png";
import phpstormBrandLogo from "@/images/logos/brand/phpstorm-brand-logo.png";
import iosBrandLogo from "@/images/logos/brand/ios-brand-logo.png";
import androidBrandLogo from "@/images/logos/brand/android-brand-logo.png";
import mySqlBrandLogo from "@/images/logos/brand/mysql-brand-logo.png";
import woocommerceBrandLogo from "@/images/logos/brand/woo-brand-logo.png";
import clickUpBrandLogo from "@/images/logos/brand/clickup-brand-logo.png";
import awsBrandLogo from "@/images/logos/brand/aws-brand-logo.png";

export default function BrandSection() {
    return (
        <>
            <div className="mt-10 lg:mt-14">
                <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                    Working With 50+ Brands ✨ Worldwide
                </h3>
                <div
                    className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
                    <BrandLogo logoSrc={reactBrandLogo} alt="The react logo"/>
                    <BrandLogo logoSrc={wordpressBrandLogo} alt="The wordpress logo"/>
                    <BrandLogo logoSrc={laravelBrandLogo} alt="The laravel logo"/>
                    <BrandLogo logoSrc={tsBrandLogo} alt="The ts logo"/>
                    <BrandLogo logoSrc={tailwindcssBrandLogo} alt="The tailwindcss logo"/>
                    <BrandLogo logoSrc={jQueryBrandLogo} alt="The jQuery logo"/>
                    <BrandLogo logoSrc={javascriptBrandLogo} alt="The javascript logo"/>
                    <BrandLogo logoSrc={phpBrandLogo} alt="The php logo"/>
                    <BrandLogo logoSrc={figmaBrandLogo} alt="The figma logo"/>
                    <BrandLogo logoSrc={phpstormBrandLogo} alt="The phpstorm logo"/>
                    <BrandLogo logoSrc={iosBrandLogo} alt="The ios logo"/>
                    <BrandLogo logoSrc={androidBrandLogo} alt="The android logo"/>
                    <BrandLogo logoSrc={mySqlBrandLogo} alt="The mysql logo"/>
                    <BrandLogo logoSrc={woocommerceBrandLogo} alt="The woocommerce logo"/>
                    <BrandLogo logoSrc={clickUpBrandLogo} alt="The clickup logo"/>
                    <BrandLogo logoSrc={awsBrandLogo} alt="The aws logo"/>
                </div>
            </div>
        </>
    )
}
