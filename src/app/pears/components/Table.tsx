import styles from "./Table.module.css";

type Props = {
    price5L3kg: string;
    price5L5kg: string;
    price5L10kg: string;
    price4L3kg: string;
    price4L5kg: string;
    price4L10kg: string;
    price3L3kg: string;
    price3L5kg: string;
    price3L10kg: string;
    price2L3kg: string;
    price2L5kg: string;
    price2L10kg: string;
    priceL5kg: string;
    priceL10kg: string;
}

export default function Table({
    price5L3kg,
    price5L5kg,
    price5L10kg,
    price4L3kg,
    price4L5kg,
    price4L10kg,
    price3L3kg,
    price3L5kg,
    price3L10kg,
    price2L3kg,
    price2L5kg,
    price2L10kg,
    priceL5kg,
    priceL10kg}: Props) {
    return (
        <div className={styles.tableWrap}>
            <table>
                <thead>
                    <tr>
                        <th>梨の大きさ \ 箱のサイズ</th>
                        <th>３kg</th>
                        <th>５kg</th>
                        <th>１０kg</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>５L　（大）</th>
                        <td>5～6個<br />{price5L3kg}</td>
                        <td>7～10個<br />{price5L5kg}</td>
                        <td>14～20個<br />{price5L10kg}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>４L</th>
                        <td>7～8個<br />{price4L3kg}</td>
                        <td>12個<br />{price4L5kg}</td>
                        <td>24個<br />{price4L10kg}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>３L</th>
                        <td>9個<br />{price3L3kg}</td>
                        <td>14個<br />{price3L5kg}</td>
                        <td>28個<br />{price3L10kg}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>２L</th>
                        <td>10個<br />{price2L3kg}</td>
                        <td>16個<br />{price2L5kg}</td>
                        <td>32個<br />{price2L10kg}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>L　　（小）</th>
                        <td></td>
                        <td>18個<br />{priceL5kg}</td>
                        <td>36個<br />{priceL10kg}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}