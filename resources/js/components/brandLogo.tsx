export default function BrandLogo({logoSrc, alt}: {logoSrc: string, alt?: string;}) {
    return (
        <div
            className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
            <img src={logoSrc} alt={alt} className="h-8 w-8 lg:h-10 lg:w-10"/>
        </div>
    )
}
