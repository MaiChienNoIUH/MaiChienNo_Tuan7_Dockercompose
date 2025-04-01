const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

app.post('/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.send(newItem);
});

app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
