import React from 'react';
import styles from './PhoneMobileInfo.module.css';
type feature = {
    name: string;
    title: string,
    desc: string[];
};

export default function MobileInfo(): JSX.Element {
    const featuresList: feature[] = [
        {
            name: "course",
            title: "一键查看课表",
            desc: [
                "获取教务网个人课表",
                "方便查看课程"
            ]
        },
        {
            name: "classroom",
            title: "空余教室查看",
            desc: [
                "查询教学区空余教室",
                "轻松查找自习去处"
            ]
        },
        {
            name: "todo",
            title: "定义个性待办",
            desc: [
                "获取教务网个人课表",
                "方便查看课程"
            ]
        },
        {
            name: "exam",
            title: "考试场次提醒",
            desc: [
                "考前推送提醒",
                "合理规划复习"
            ]
        },
        {
            name: "jww",
            title: "链接教务网站",
            desc: [
                "直达教务系统",
                "查看课程情况"
            ]
        },
        {
            name: "gradepoint",
            title: "绩点直观显示",
            desc: [
                "直观显示绩点",
                "多种分制自由切换"
            ]
        }
    ]
    return (
        <div className={styles.appdesc}>
            <div className={styles.intro}>
                <div className={styles.firstIntro}>
                    校园内一站式App
                </div>
                <div className={styles.secondIntro}>
                    专为浙大学生开发
                </div>
            </div>
            <br />
            <br />
            <div className={styles.features}>
                {
                    featuresList.map((value, index) => {
                        return (
                            <div className={styles.feat} key={index.toString()}>
                                <img src={`/mobilePhone/MobileInfo/${value.name}.svg`} className={styles.icon}></img>
                                <br />
                                <div className={styles.title}>{value.title}</div>
                                <div className={styles.featuresDetail}>
                                    {value.desc.map((value, index) => {
                                        return (
                                            <>
                                                <div key={index.toString()}>
                                                    {value.toString()}
                                                </div>
                                                <br></br>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.videoFeatures}>
                <div className={styles.firstIntro}>
                    海量丰富功能
                </div>
                <div className={styles.secondIntro}>
                    小技巧 for Android
                </div>
            </div>
            {/* 以下部分都是导入其他模块来完成的，这里只是插入示例图 */}
            <div className={styles.videofeatureimage}>
                {/* TODO 插入gif切换 */}
                <img src="/mobilePhone/MobileInfo/videofeature.png" />
                <div className={styles.centerText}>
                    3/10
                </div>
            </div>
            <div className={styles.tipsIntro}>
                <div className={styles.tipsName}>
                    蓝码召唤术
                </div>
                <div className={styles.tipsdetail}>
                    蓝码、每日打卡等小工具可添加快捷方式至桌面
                </div>
            </div>
            <div className={styles.QA}>
                {/* TODO QA模块 */}
                <img src="/mobilePhone/MobileInfo/qa.png" />
            </div>
        </div>
    );
}
