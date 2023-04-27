import { ItemChilds } from '../../../types/ItemChilds'

const MobileChildren = (): JSX.Element => {

    const MobileChilds: ItemChilds[] = [
        { id: 1, name: 'شیائومی' },
        { id: 2, name: 'سامسونگ' },
        { id: 3, name: 'اپل' },
        { id: 4, name: 'هواوی' },
        { id: 4, name: 'نوکیا' },
        { id: 4, name: 'آنر' },
        { id: 4, name: 'گوشی های ساده' },
        { id: 4, name: 'گلس گوشی موبایل'},
        { id: 4, name: 'کیف و کاور گوشی'},
        { id: 4, name: 'کابل و مبدل'},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
        // { id: 4, name: ''},
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
