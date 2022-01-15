// import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from './Outliner.module.css';
import toTopIcon from '../public/outliner/toTop.svg'

type outlinerElem = {
  name: string;
  href: string;
};

// todo:
// 1.根据页面位置变色

export default function Outliner(): JSX.Element {
  const outlinerList: outlinerElem[]  = [
    {
      name: '下载',
      href: '#download',
    },
    {
      name: '基本介绍',
      href: '#intro',
    },
    {
      name: '使用技巧',
      href: '#usage',
    },
    {
      name: 'Q&A',
      href: '#QA',
    },
  ];

  return (<>
    <div className={styles.outliner}>
      <div>
        {outlinerList.map((value, index) => (
          <Link href={value.href} key={index.toString()}>
            <a>{value.name}</a>
          </Link>
        ))}
      </div>
      <Link href={outlinerList[0].href} key={'ToTop'}>
        <a className={styles.toTop}>
          <div>
            <Image 
              src={toTopIcon}
              height={34}
              width={34}
            />
          </div>
        </a>
      </Link>
    </div>
  </>);
}


