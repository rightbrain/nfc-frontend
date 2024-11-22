import VCard from "vcard-creator";
import download from "downloadjs";


export default function generateAndDownloadVCard(props) {

    const {formValues} = props

    console.log(formValues?.name);
    console.log(formValues?.email);
    console.log(formValues?.mobile);
    console.log(formValues?.company_name);
    console.log(formValues?.designation);
    console.log(formValues?.address);
    const downloadFile = () => {
        const myVCard = new VCard();
        myVCard
            .addName(formValues?.name)
            .addEmail(formValues?.email)
            .addPhoneNumber(formValues?.mobile)
            .addCompany(formValues?.company_name)
            .addJobtitle(formValues?.designation)
            .addAddress(formValues?.address)
        download(myVCard.toString(), "vCard.vcf");
    };
    downloadFile();
}
