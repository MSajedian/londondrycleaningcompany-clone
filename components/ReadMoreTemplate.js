
import { Button, Collapse } from 'react-bootstrap';
import { useState } from 'react'

export default function ReadMoreTemplate() {
    const [open, setOpen] = useState(false);
    // const [isShow, setIsShow] = useState("show");

    // const [isDisplayBlock, setDisplayBlock] = useState({ display: "block" });

    return (
        <>
            <Button
                onClick={() => {
                    setOpen(!open);
                    // (isShow === "show" ? setIsShow("") : setIsShow("show"))
                }}
                aria-controls="collapse-text"
                aria-expanded={open}
                // style={isDisplayBlock}
                className={open ? "collapse" : "show"}

            >
                click
            </Button>
            <Collapse
                className={open ? "show" : ""}
            // in={open}
            >
                <div id="collapse-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi totam quisquam error, nemo, dignissimos accusantium facilis aliquid, maiores cumque illo ea aut id? Debitis ipsum quo animi, expedita dolorem saepe?
                </div>
            </Collapse>
        </>
    );
}

;