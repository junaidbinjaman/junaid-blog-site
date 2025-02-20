import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <>
            <img src='/dev-dive-personal-blog-site-logo.svg' alt="Favicon" className="w-[120px] lg:w-[220px] hidden dark:block" />
            <img src='/dev-dive-personal-blog-site-logo-light.svg' className="dark:hidden" width="220" alt="Favicon" />
        </>
    )
}
