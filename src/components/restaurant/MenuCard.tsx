import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuFoodDetails from "./MenuFoodDetails";
import Title from "../Title";
import ExtrasList from "./ExtrasList";

const MenuCard = () => {
  return (
    <div className="mb-5">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <MenuFoodDetails />
        </AccordionSummary>
        <AccordionDetails>
          <Title title="Extras:" classes="text-xl mb-2" />
          <ExtrasList />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
