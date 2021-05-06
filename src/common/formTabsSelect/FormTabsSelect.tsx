import React, {useState} from "react";
import  s from './FormTabsSelect.module.css'


type FormTabsType = {
    title: string
    description?: any
    id?: number
}
export const FormTabsSelect: React.FC<FormTabsType> = React.memo( (
    {
        title, description, id,
        ...restProps
    }
) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className={s.flex}>

            <div className={s.sideitem}>
                <div onClick={() => setChecked(!checked)}
                     className={checked ? s.item : s.itemRed}>
                    <span>{title}</span>
                </div>
                {checked && <div style={{border: '2px'}} className={s.item}>{description}</div>}
            </div>
        </div>
    )
})