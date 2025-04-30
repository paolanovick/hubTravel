import { FunctionComponent } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { useFooter, useDatosGenerales } from "../../contextos/DatosAgenciaContext";

interface IzquierdaArribaProps {
  logo: string | null;
}

const IzquierdaArriba: FunctionComponent<IzquierdaArribaProps> = ({ logo }) => {
  const footer = useFooter();
  const datosGenerales = useDatosGenerales();

  const tipografia =
    footer?.tipografia || datosGenerales?.tipografiaAgencia || "inherit";
  const textoColor =
    footer?.tipografiaColor || datosGenerales?.colorTipografiaAgencia || "#FFFFFF";
  const textoFooter =
    footer?.texto || "© 2025 Citrus Energía - Todos los derechos reservados";

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="center"
      justifyContent={{ xs: "center", sm: "flex-start" }}
      sx={{
        width: "100%",
        m: 0,
        px: { xs: 0, sm: 0, md: 0 },
        py: { xs: 1, sm: 1, md: 0 },
        backgroundColor: "transparent",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
   {logo && (
  <Box
    component="img"
    src={logo}
    alt="Logo"
    className="logo-image"
    sx={{
      height: { xs: 120, sm: 150, md: 200, lg: 300 }, // Mayor tamaño en pantallas grandes
      width: { xs: "80vw", sm: "70vw", md: "50vw", lg: "40vw" }, // Ajuste de tamaño más grande en PC
      maxWidth: "100%",
      objectFit: "contain",
      cursor: "pointer",
      transition: "transform 0.3s ease-in-out",
      mt: { xs: 2, sm: 3, md: 4 },
    }}
  />
)}





      <Typography
        variant="body2"
        sx={{
          color: textoColor,
          fontFamily: tipografia,
          lineHeight: 1.6,
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
        }}
      >
        {textoFooter}
      </Typography>
    </Stack>
  );
};

export default IzquierdaArriba;
