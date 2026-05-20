import Label from "./Label";
import styles from "./FormItem.module.css";

type Props = {
    htmlFor: string;
    label: string;
    type: string;
    id: string;
    name: string;
    required ?: boolean;
}

export default function FormItem({ htmlFor, label, type, id, name, required=false }: Props) {
    return (
        <div className={styles.formGroup}>
            <Label htmlFor={htmlFor}>{label}</Label>
            <input type={type} id={id} name={name} required={required} />
        </div>  
    )
}