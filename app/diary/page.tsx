'use client'
import React from 'react'
import { diaryList } from '@/assets/assets'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Page = () => {
    const router = useRouter();
    const goDiaryDetail = (id) => {
      router.push(`/diary/detail/${id}`);
    };
    return <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 10,
        }}
        dataSource={diaryList}
        footer={
            <div>
                <b>ant design</b> footer part
            </div>
        }
        renderItem={(item) => (
            <List.Item
                key={item.title}
                actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                    <Image
                        width={272}
                        alt="logo"
                        src={item.image}
                    />
                }
                onClick={() => goDiaryDetail(item.id)}
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.date}
                    description={item.weather}
                />
                {item.content}
            </List.Item>
        )}
    />
}

export default Page;