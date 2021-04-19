import {Typography} from '@material-ui/core'

export default function Footer() {
  return (
    <footer style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f2f2f2",
        padding: "5px 0px",
        position: "fixed",
        bottom: 0,
        width: "100%",
    }}>
      <Typography variant="overline">Cuatl | La mejor moda artesanal de México | 2021</Typography>
    </footer>
  );
};
