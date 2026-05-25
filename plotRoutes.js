const express = require("express");

const router = express.Router();

const Plot = require("../models/Plot");

router.post("/", async (req, res) => {

    try {

        const plot = new Plot(req.body);

        await plot.save();

        res.status(201).json({
            message: "Plot Added Successfully",
            plot
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.get("/", async (req, res) => {

    try {

        const plots = await Plot.find();

        res.status(200).json(plots);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.put("/:id", async (req, res) => {

    try {

        const updatedPlot = await Plot.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "Plot Updated",
            updatedPlot
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.delete("/:id", async (req, res) => {

    try {

        await Plot.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Plot Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;
