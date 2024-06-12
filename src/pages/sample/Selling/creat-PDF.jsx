import {Page, Document, StyleSheet, Text, Image, View, Font} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import MontserratRegular from '../../../assets/fonts/Montserrat-Regular.ttf'
import MontserratBold from '../../../assets/fonts/Montserrat-Bold.ttf'
import MontserratSemiBold from '../../../assets/fonts/Montserrat-SemiBold.ttf'
import MontserratMedium from '../../../assets/fonts/Montserrat-Medium.ttf'
import moment from "moment";
import logo from '../../../assets/logo-pdf.png'
import QR from '../../../assets/QR.png'
import location from '../../../assets/location-crm.jpg'
import sunCity from '../../../assets/login-page.jpg'
import parking from '../../../assets/pdf-icon/free-icon-vehicle-7162285 1.png'
import building from '../../../assets/pdf-icon/high-quality 1.png'
import smartCity from '../../../assets/pdf-icon/smart-city 1.png'
import locationService from '../../../assets/pdf-icon/location 1.png'
import camera from '../../../assets/pdf-icon/free-icon-cctv 1.png'


// Register fonts
Font.register({
    family: 'Montserrat',
    fonts: [
        {src: MontserratRegular, fontStyle: "normal", fontWeight: "normal"},
        {src: MontserratBold, fontStyle: "normal", fontWeight: "bold"},
        {src: MontserratSemiBold, fontStyle: "normal", fontWeight: "700"},
        {src: MontserratMedium, fontStyle: "normal", fontWeight: "500"},
    ]
});


const styles = StyleSheet.create({
    dashed: {
        width: "100%",
        borderBottom: "1px dashed #FF5B00",
        flex: '1 1 0%'
    },
    body: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 40,
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    widthHalf: {
        width: '48%'
    },
    textColor: {
        color: 'black'
    },
    title_gold: {
        fontSize: 14,
        color: '#FF5B00',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF5B00',
    },
    title_number: {
        fontSize: 12,
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF5B00',
        marginTop: 10
    },
    listItem: {
        color: '#918C86',
        fontSize: 10,
        fontFamily: 'Montserrat',
    },
    bottomText: {
        color: '#918C86',
        fontSize: 8,
        fontFamily: 'Montserrat',
    },
    listItemText: {
        color: '#FF5B00',
        fontSize: 10,
        textAlign: "center",
        fontFamily: 'Montserrat',
        wordBreak: 'break-word'
    },
    marginSmY: {
        marginVertical: 5,
    },
    marginLgY: {
        marginVertical: 20,
    },
    marginY: {
        marginVertical: 10,
    },
    textValue: {
        fontWeight: "bold",
    },
    text: {
        margin: 12,
        fontSize: 12,
        textAlign: 'justify',
    },
    logo: {
        height: 40,
        width: 200,
        objectFit: 'contain'
    },
    imageBg: {
        width: '100%',
        marginBottom: 8,
    },
    floorImage: {
        width: '100%',
        objectFit: 'contain',
        height: '230px',
        marginTop: '20px'
    },
    iconList: {
        flexWrap: "wrap",
        justifyContent: 'center'
    },

    iconBox: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'col',

    },
    icon: {
        width: '20px',
        height: '20px',
        objectFit: 'contain',
        objectPosition: 'center'
    },
    iconParent: {
        padding: '8px',
        borderRadius: '100%',
        backgroundColor: '#FF5B00'
    },
    iconBg: {
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        height: 400
    },
    line: {
        width: 20,
        height: '0.5px',
        backgroundColor: '#d6b87b'
    },
    //     TABLE

    table: {
        display: 'table',
        width: 'auto',
        marginBottom: '5px',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#FF5B00',
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        margin: 'auto',
        flexDirection: 'row',
        fontFamily: 'Montserrat',
    },
    tableCol: {
        width: '50%',
        borderStyle: 'solid',
        borderColor: '#FF5B00',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    tableColRight: {
        width: '50%',
        borderStyle: 'solid',
        borderColor: '#FF5B00',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottom: 0
    },
    tableHeader: {
        // width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FF5B00',
        padding: "1px 0 4px 0",
        color: 'white',
        fontFamily: 'Montserrat'
    },

    tableCell: {
        margin: 'auto',
        marginTop: 5,
        fontSize: 10,
    },
    tableList: {
        paddingVertical: 5,
        color: '#000',
        borderBottom: 1,
        borderColor: '#000',
        fontSize: 12
    },
    bottomInfo: {
        paddingVertical: 5,
        color: '#000',
        fontSize: 12
    },
    borderRight: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottom: 0
    }
});

export default function CreatPDF({data}) {

    const listIcon = [
        {
            icon: parking,
            title: 'Современная парковка'
        },
        {
            icon: building,
            title: 'Высокое качество'
        },
        {
            icon: smartCity,
            title: 'Удобная инфраструктура'
        },
        {
            icon: locationService,
            title: 'Удобное расположение'
        },
        {
            icon: camera,
            title: 'Охраняемая зона'
        },
    ]


    return (
        <Document>
            <Page size={'A4'} style={styles.body}>
                <View style={[styles.center, styles.marginLgY]}>
                    <Image style={styles.logo} src={logo}/>
                </View>
                <View style={styles.row}>
                    <View style={styles.widthHalf}>
                        <Text style={[styles.title_gold, styles.marginY]}>
                            Информация
                        </Text>
                        <View style={[styles.row, styles.marginSmY, styles.listItem, styles.textColor]}>
                            <Text>
                                Ваша квартира:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {data?.apartmentName}
                            </Text>
                        </View>


                        <View style={[styles.row, styles.marginSmY, styles.listItem, styles.textColor]}>
                            <Text>
                                Дом:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {data?.houseName}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem]}>
                            <View style={[styles.row, styles.listItem, styles.widthHalf, styles.textColor]}>
                                <Text>
                                    Этаж:
                                </Text>
                                <Text style={styles.dashed}>
                                </Text>
                                <Text style={styles.textValue}>
                                    {data?.floorName}
                                </Text>
                            </View>
                            <View style={[styles.row, styles.listItem, styles.widthHalf, styles.textColor]}>
                                <Text>
                                    Площадь (м2):
                                </Text>
                                <Text style={styles.dashed}>
                                </Text>
                                <Text style={styles.textValue}>
                                    {data?.ploshd}
                                </Text>
                            </View>

                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem, styles.textColor]}>
                            <Text>
                                Количество комнат:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {data?.roomCount}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.widthHalf}>
                        <Text style={[styles.title_gold, styles.marginY]}>
                            Дополнительная информация
                        </Text>
                        <View style={[styles.row, styles.marginSmY, styles.listItem, styles.textColor]}>
                            <Text>
                                Дата передачи ключей:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>
                                {moment(data?.slotFinished
                                ).format("DD.MM.YYYY")}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem, styles.textColor]}>
                            <Text>
                                Дата печати:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>

                                {moment(data?.nowTime
                                ).format("DD.MM.YYYY")}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem, styles.textColor]}>
                            <Text>
                                Ваш менеджер:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>

                                {data?.sellerName}
                            </Text>
                        </View>
                        <View style={[styles.row, styles.marginSmY, styles.listItem, styles.textColor]}>
                            <Text>
                                Телефон менеджера:
                            </Text>
                            <Text style={styles.dashed}>
                            </Text>
                            <Text style={styles.textValue}>

                                +{data?.sellerPhoneNumber}
                            </Text>
                        </View>
                    </View>
                </View>
                {/*<View style={{...styles.center,marginTop:20}}>*/}
                {/*    <Text style={styles.title}>*/}
                {/*        Желаем Вам удачной покупки!*/}
                {/*    </Text>*/}
                {/*    <Text style={{...styles.listItem,marginTop:5,...styles.textColor}}>*/}
                {/*        Расположение Вашей*/}
                {/*        квартиры*/}
                {/*    </Text>*/}
                {/*</View>*/}
                <View style={[styles.row, {marginTop: '35px'}]}>
                    <Image style={{...styles.imageBg, objectFit: "cover", height: 170}} src={sunCity}/>
                    <Image style={{
                        ...styles.imageBg,
                        objectFit: "cover",
                        objectPosition: 'bottom',
                        marginLeft: '10px',
                        height: 170
                    }} src={location}/>
                </View>
                <View style={[styles.center, {...styles.title, marginBottom: "20px",marginTop:'25px'}]}>
                    <Text>
                        Уникальность проекта
                    </Text>
                </View>
                <View style={{marginTop: 10}}>
                    <View>
                        <View style={[styles.row, styles.iconList]}>
                            {
                                listIcon.map(item => (
                                    <View key={item?.icon}
                                          style={[styles.iconBox, {width: '33%', marginBottom: '15px', gap: "10px"}]}>
                                        <View style={{
                                            display: "flex",
                                            alignItems: 'center',
                                            gap: '15px',
                                            flexDirection: 'row',
                                        }}>
                                            <View style={styles.line}></View>
                                            <View style={styles.iconParent}>
                                                <Image style={styles.icon} src={item.icon}/>
                                            </View>
                                            <View style={styles.line}></View>

                                        </View>
                                        <Text style={styles.listItemText}>
                                            {item.title}
                                        </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
                <View style={[styles.row, {marginTop: '20px'}]}>
                    <Image style={{
                        width: 80,
                        objectFit: "cover",
                        objectPosition: 'bottom',
                        height: 80,
                        margin: '0 auto'
                    }} src={QR}/>
                </View>
                <View style={[styles.center]}>
                    <Text style={styles.title_number}>
                        +998 78 150 55 00
                    </Text>
                </View>
            </Page>
            <Page size={'A4'} style={styles.body}>
                <View style={[styles.center, styles.marginLgY]}>
                    <Image style={styles.logo} src={logo}/>

                </View>
                <View>
                    <Image style={styles.floorImage}
                           src={`${process.env.REACT_APP_IMAGE_URL}/${data?.apartmentFloorImage}`}
                    />
                </View>
                <View>
                    <Image style={[styles.iconBg, styles.marginY]}
                           src={`${process.env.REACT_APP_IMAGE_URL}/${data?.apartmentHouseImage}`}/>
                </View>
                <View style={[styles.center, styles.marginY]}>
                    <Text style={styles.title_number}>
                        +998 78 150 55 00
                    </Text>
                </View>
            </Page>
            <Page size={'A4'} style={styles.body}>
                <View style={styles.center}>
                    <Image style={styles.logo} src={logo}/>
                </View>
                <View style={{...styles.center, marginTop: 20}}>
                    <Text style={styles.title}>
                        Желаем Вам удачной покупки!
                    </Text>

                </View>

                <View style={{marginTop: '20px'}}>
                    {
                        data?.payments?.map((payment, ind) => (
                            <View key={ind} style={styles.table}>
                                <View style={[styles.tableHeader]}>
                                    <Text style={{
                                        ...styles.tableCell,
                                        width: '75%',
                                        textAlign: "center", ...styles.borderRight
                                    }}>
                                        {payment.monthCount === 0 ? '100% предоплата при Инвест договоре' : `Рассрочка при Инвест договоре с ${payment?.fristPay}% ПВ`}
                                    </Text>

                                    <Text style={{...styles.tableCell, width: '25%', textAlign: 'center'}}>
                                        {payment?.ploshdSum}$
                                    </Text>
                                </View>
                                {/*<View style={styles.tableRow}>*/}
                                {/*    <View style={styles.tableCol}>*/}
                                {/*        <Text style={styles.tableCell}> Цена со скидкой {payment?.discount}%</Text>*/}
                                {/*    </View>*/}
                                {/*    <View style={styles.tableCol}>*/}

                                {/*        <View style={[styles.row]}>*/}
                                {/*            <View style={styles.tableColRight}>*/}
                                {/*                <Text style={styles.tableCell}>{payment?.skidka?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} $</Text>*/}
                                {/*            </View>*/}
                                {/*            <View style={{width:'50%'}}>*/}
                                {/*                <Text style={styles.tableCell}>{payment?.skidkaSum?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} сум </Text>*/}
                                {/*            </View>*/}
                                {/*        </View>*/}
                                {/*    </View>*/}
                                {/*</View>*/}
                                <View style={styles.tableRow}>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}> {payment?.fristPay}% предоплата</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <View style={[styles.row]}>
                                            <View style={styles.tableColRight}>
                                                <Text
                                                    style={styles.tableCell}>{payment?.initialPayment?.toLocaleString('en-US', {style: 'decimal'}).replace(/,/g, ' ')} $</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <Text
                                                    style={styles.tableCell}>{payment?.initialPaymentSum?.toLocaleString('en-US', {style: 'decimal'}).replace(/,/g, ' ')} сум </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                {
                                    payment?.monthCount > 0
                                    &&
                                    <View style={styles.tableRow}>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}> Сумма ежемесячных оплат
                                                ({payment?.monthCount})</Text>
                                        </View>
                                        <View style={styles.tableCol}>

                                            <View style={[styles.row]}>
                                                <View style={styles.tableColRight}>
                                                    <Text
                                                        style={styles.tableCell}>{payment?.monthPayment?.toLocaleString('en-US', {style: 'decimal'}).replace(/,/g, ' ')} $</Text>
                                                </View>
                                                <View style={{width: '50%'}}>
                                                    <Text
                                                        style={styles.tableCell}>{payment?.monthPaymentSum?.toLocaleString('en-US', {style: 'decimal'}).replace(/,/g, ' ')} сум </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                }
                                {/*<View style={[styles.tableRow]}>*/}
                                {/*    <View style={styles.tableCol}>*/}
                                {/*        <Text style={styles.tableCell}> Цена за квадратный метр</Text>*/}
                                {/*    </View>*/}
                                {/*    <View style={styles.tableCol}>*/}

                                {/*        <View style={[styles.row]}>*/}
                                {/*            <View style={styles.tableColRight}>*/}
                                {/*                <Text style={styles.tableCell}>{Math.ceil(payment?.amountExcludingSkidk/data?.ploshd).toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} $</Text>*/}
                                {/*            </View>*/}
                                {/*            <View style={{width:'50%'}}>*/}
                                {/*                <Text style={styles.tableCell}>{payment?.amountExcludingSkidkSum?.toLocaleString('en-US', { style: 'decimal' }).replace(/,/g, ' ')} сум </Text>*/}
                                {/*            </View>*/}
                                {/*        </View>*/}
                                {/*    </View>*/}
                                {/*</View>*/}
                                <View style={[styles.tableRow]}>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}> Итоговая цена</Text>
                                    </View>
                                    <View style={styles.tableCol}>

                                        <View style={[styles.row]}>
                                            <View style={styles.tableColRight}>
                                                <Text
                                                    style={styles.tableCell}>{payment?.amountExcludingSkidk?.toLocaleString('en-US', {style: 'decimal'}).replace(/,/g, ' ')} $</Text>
                                            </View>
                                            <View style={{width: '50%'}}>
                                                <Text
                                                    style={styles.tableCell}>{payment?.amountExcludingSkidkSum?.toLocaleString('en-US', {style: 'decimal'}).replace(/,/g, ' ')} сум </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }


                    <View style={{...styles.bottomInfo, marginTop: "1px", fontWeight: "bold"}}>
                        <View style={[styles.row, styles.bottomText, styles.textColor]}>
                            <Text>
                                Актуальный курс валют
                            </Text>
                            <Text style={{fontWeight: 'bold'}}>
                                {data?.kurs}
                            </Text>
                        </View>

                    </View>
                    <View style={styles.bottomInfo}>
                        <View style={[styles.row, styles.bottomText]}>
                            <Text>
                                Договора заключаются и оплачиваются строго в национальной валюте Узб
                            </Text>
                        </View>

                    </View>
                    <View style={{...styles.bottomInfo, fontWeight: "bold"}}>
                        <View style={[styles.row, styles.bottomText, styles.textColor,]}>
                            <Text>
                                Дата прайса
                            </Text>
                            <Text>
                                {moment(data?.nowTime).format("DD.MM.YYYY")}
                            </Text>
                        </View>

                    </View>

                    <View style={{...styles.bottomInfo, marginTop: "1px", fontWeight: "bold"}}>
                        <View style={[styles.row, styles.bottomText, styles.textColor]}>
                            <Text>
                                Менеджер
                            </Text>
                            <Text>
                                {data?.sellerName}
                            </Text>
                        </View>

                    </View>
                    <View style={{...styles.bottomInfo, fontWeight: "bold"}}>
                        <View style={[styles.row, styles.bottomText, styles.textColor]}>
                            <Text>
                                Контакты
                            </Text>
                            <Text>
                                +{data?.sellerPhoneNumber}
                            </Text>
                        </View>

                    </View>


                    <View style={[styles.center]}>
                        <Text style={styles.title_number}>
                            +998 78 150 55 00
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
}


CreatPDF.propTypes = {
    data: PropTypes.object
}


