import Book from '@/app/components/Book'
import { assets } from '@/assets/assets'

export default function Page() {
    const ImageList = [assets.book1, assets.book2, assets.book3, assets.book4, assets.book5, assets.book6, assets.book7];
    const ContentList = ['aaaaaaa', 'bbbbbb', 'cccccccc', 'ddddddd', 'fffffff']
    const ContentPage = () => (
        <>
            {ContentList.reverse().map((item, index) => (
                <li key={index} className={`absolute w-full h-full bg-white border-[0.5px] border-grey-400`}>{item}</li>
            ))}
        </>
    );
    return (
        <Book {...{
            dataList: ImageList,
            hoverMoveX: '150px'
        }}/>
        // <Book {...{
        //     type: 'Content',
        //     dataList: ContentList,
        //     hoverMoveX: '150px',
        //     component: ContentPage
        // }} />
    )
}