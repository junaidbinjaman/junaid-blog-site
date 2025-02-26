import AwardBox from "@/components/awardBox";
import pullShark from "@/images/pull-shark-github.png";
import yolo from "@/images/yolo-github.png";
import quickDraw from "@/images/quickdraw-github.png";
import * as React from "react";

export default function AwardSection() {
    return (
        <div className="mt-10 lg:mt-14">
            <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                Awards and Recognitions
            </h3>

            <div className="mt-8 space-y-4">
                <AwardBox
                    thumbnail={pullShark}
                    label="2nd pull request merged"
                    year="2023"
                    category="Pull Shark"
                    href="https://github.com/junaidbinjaman?achievement=pull-shark&tab=achievements"
                />
                <AwardBox
                    thumbnail={yolo}
                    label="You want it? You merge it. Merged without a review"
                    year="2021"
                    category="YOLO"
                    href="https://github.com/junaidbinjaman?achievement=quickdraw&tab=achievements"
                />
                <AwardBox
                    thumbnail={quickDraw}
                    label="Closed within 5 minutes of opening"
                    year="2019"
                    category="Gitty up!"
                    href="https://github.com/junaidbinjaman?achievement=quickdraw&tab=achievements"
                />
            </div>
        </div>
    )
}
