import { ItemChilds } from '../../../types/ItemChilds'

const MobileChildren = (): JSX.Element => {

    const MobileChilds: ItemChilds[] = [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
        { id: 4, name: 'test4' },
    ]
    
    return (
        <>
            {
                MobileChilds.map((item: ItemChilds) => (
                    <div key={item.id}>{item.name}</div>
                ))
            }
        </>
    )
}

export default MobileChildren
