function Detail({ content, active }) {
    return (
        <>
            <p>{content}</p>
            <p style={{ color: active ? "red" : "black" }}>状态：{active ? "显示中" : "已隐藏"}</p>
        </>
    )
}

function Article({ title, detailData }) {
    return (
        <div>
            <h2>{title}</h2>
            <Detail {...detailData} />
        </div>
    )
}

export default function App() {
    const articleData = [{
        title: '标题1',
        detailData: {
            content: '内容1',
            active: true
        }
    },
    {
        title: '标题2',
        detailData: {
            content: '内容2'
        }
    },
    {
        title: '标题3',
        detailData: {
            content: '内容3',
            active: true
        }
    }
    ]
    return (
        <>
            <Article
                {...articleData[0]}
            />
            <Article
                title='标签2'
                content='内容2'
                {...articleData[1]}
            />
            <Article
                title='标签3'
                content='内容3'
                active
                {...articleData[2]}
            />
        </>
    )
}