const axios = require('axios');

const online = {
    kbffa: async () => {
        try {
            const response = await axios.get('https://api.toadstudio.es/api/zstats/online/kbffa');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    arenapvp: async () => {
        try {
            const response = await axios.get('https://api.toadstudio.es/api/zstats/online/arenapvp');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    skywars: async () => {
        try {
            const response = await axios.get('https://api.toadstudio.es/api/zstats/online/skywars');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    skypvp: async () => {
        try {
            const response = await axios.get('https://api.toadstudio.es/api/zstats/online/skypvp');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    bedwars: async () => {
        try {
            const response = await axios.get('https://api.toadstudio.es/api/zstats/online/bedwars');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    ctw: async () => {
        try {
            const response = await axios.get('https://api.toadstudio.es/api/zstats/online/ctw');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    total: async () => {
        try {
            const response = await axios.get('https://api.toadstudio.es/api/zstats/online/total');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

const stats = {
    kbffa: async (mode, time, page = 'default') => {
        const validModes = ['kills', 'maxStreak'];
        const validTimes = ['lifetime', 'monthly', 'weekly', 'daily'];

        if (!mode || !validModes.includes(mode)) {
            throw new Error(`Modo no válido. Debe ser uno de estos: ${validModes.join(', ')}`);
        }

        if (!time || !validTimes.includes(time)) {
            throw new Error(`Intervalo de tiempo no válido. Debe ser uno de estos: ${validTimes.join(', ')}`);
        }

        if (isNaN(page) || page < 1) {
            throw new Error('La página no es un número válido. Debe ser un número mayor o igual a 1.');
        }

        const url = `https://api.toadstudio.es/api/zstats/stats/kbffa/${mode}/${time}/${page}`;

        try {
            const response = await axios.get(url);
            const responseData = response.data;

            if (Array.isArray(responseData) && responseData.length === 0) {
                throw new Error('No se encontraron datos. ¿Has puesto bien el número de la página?');
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    },
    //piedra del riñón en código javascript
    arenapvp: async (mode, time, type, page = 'default') => {
        const validModes = ['wins', 'finalkills', 'stars'];
        const validTimes = ['lifetime', 'monthly', 'weekly', 'daily'];
        const validTypes = ['builduhc_1v1', 'builduhc_2v2', 'builduhc_4v4', 'battlerush_1v1', 'battlerush_2v2', 'bedboom_1v1', 'bedboom_2v2', 'bedwars_1v1', 'bedwars_2v2', 'bedwars_3v3', 'bedwars_4v4', 'boxfight_1v1', 'boxfight_2v2', 'boxing_1v1', 'breezily_1v1', 'breezily_2v2', 'classic_1v1', 'classic_2v2', 'combo_1v1', 'debuff_1v1', 'nodebuff_1v1', 'nodebuff_2v2', 'finaluhc_1v1', 'finaluhc_2v2', 'fireball_1v1', 'fireball_2v2', 'gapple_1v1', 'hcf_1v1', 'hcf_2v2', 'infinitecombo_1v1', 'mlgrush_1v1', 'oneline_2v2', 'parkour_eight', 'parkour_sixteen', 'pearlfight_1v1', 'pearlfight_2v2', 'rushingbattle_1v1', 'rushingbattle_2v2', 'sg_1v1', 'sg_2v2', 'skywars_1v1', 'skywars_2v2', 'spleef_1v1', 'spleef_2v2', 'sumo_1v1', 'sumo_2v2', 'thebridge_1v1', 'thebridge_2v2', 'tntrun_eight', 'tntrun_sixteen', 'tnttag_sixteen', 'tnttag_twentyfour'];

        if (!mode || !validModes.includes(mode)) {
            throw new Error(`Modo no válido. Debe ser uno de estos: ${validModes.join(', ')}`);
        }

        if (!time || !validTimes.includes(time)) {
            throw new Error(`Intervalo de tiempo no válido. Debe ser uno de estos: ${validTimes.join(', ')}`);
        }

        if (!type || !validTypes.includes(type)) {
            throw new Error(`Tipo no válido. Debe ser uno de estos: (los buscas en https://docs.toadstudio.es/compatibilidades)`);
        }

        if (isNaN(page) || page < 1) {
            throw new Error('La página no es un número válido. Debe ser un número mayor o igual a 1.');
        }

        const url = `https://api.toadstudio.es/api/zstats/stats/bedwars/${type}/${mode}/${time}/${page}`;

        try {
            const response = await axios.get(url);
            const responseData = response.data;

            if (Array.isArray(responseData) && responseData.length === 0) {
                throw new Error('No se encontraron datos. ¿Has puesto bien el número de la página?');
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    },

    skywars: async (mode, time, type, page = 'default') => {
        const validModes = ['kills', 'wins', 'stars'];
        const validTimes = ['lifetime', 'monthly', 'weekly', 'daily'];
        const validTypes = ['global', 'solo', 'dobules'];

        if (!mode || !validModes.includes(mode)) {
            throw new Error(`Modo no válido. Debe ser uno de estos: ${validModes.join(', ')}`);
        }

        if (!time || !validTimes.includes(time)) {
            throw new Error(`Intervalo de tiempo no válido. Debe ser uno de estos: ${validTimes.join(', ')}`);
        }

        if (!type || !validTypes.includes(type)) {
            throw new Error(`Tipo no válido. Debe ser uno de estos: ${validTypes.join(', ')}`);
        }

        if (isNaN(page) || page < 1) {
            throw new Error('La página no es un número válido. Debe ser un número mayor o igual a 1.');
        }

        const url = `https://api.toadstudio.es/api/zstats/stats/skywars/${type}/${mode}/${time}/${page}`;

        try {
            const response = await axios.get(url);
            const responseData = response.data;

            if (Array.isArray(responseData) && responseData.length === 0) {
                throw new Error('No se encontraron datos. ¿Has puesto bien el número de la página?');
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    },

    skypvp: async (mode, time, page = 'default') => {
        const validModes = ['kills', 'maxStreak'];
        const validTimes = ['lifetime', 'monthly', 'weekly', 'daily'];

        if (!mode || !validModes.includes(mode)) {
            throw new Error(`Modo no válido. Debe ser uno de estos: ${validModes.join(', ')}`);
        }

        if (!time || !validTimes.includes(time)) {
            throw new Error(`Intervalo de tiempo no válido. Debe ser uno de estos: ${validTimes.join(', ')}`);
        }

        if (isNaN(page) || page < 1) {
            throw new Error('La página no es un número válido. Debe ser un número mayor o igual a 1.');
        }

        const url = `https://api.toadstudio.es/api/zstats/stats/skypvp/${mode}/${time}/${page}`;

        try {
            const response = await axios.get(url);
            const responseData = response.data;

            if (Array.isArray(responseData) && responseData.length === 0) {
                throw new Error('No se encontraron datos. ¿Has puesto bien el número de la página?');
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    },

    bedwars: async (mode, time, type, page = 'default') => {
        const validModes = ['wins', 'finalkills', 'stars'];
        const validTimes = ['lifetime', 'monthly', 'weekly', 'daily'];
        const validTypes = ['global', 'solo', 'dobules', '3v3v3v3', '4v4v4v4'];

        if (!mode || !validModes.includes(mode)) {
            throw new Error(`Modo no válido. Debe ser uno de estos: ${validModes.join(', ')}`);
        }

        if (!time || !validTimes.includes(time)) {
            throw new Error(`Intervalo de tiempo no válido. Debe ser uno de estos: ${validTimes.join(', ')}`);
        }

        if (!type || !validTypes.includes(type)) {
            throw new Error(`Tipo no válido. Debe ser uno de estos: ${validTypes.join(', ')}`);
        }

        if (isNaN(page) || page < 1) {
            throw new Error('La página no es un número válido. Debe ser un número mayor o igual a 1.');
        }

        const url = `https://api.toadstudio.es/api/zstats/stats/bedwars/${type}/${mode}/${time}/${page}`;

        try {
            const response = await axios.get(url);
            const responseData = response.data;

            if (Array.isArray(responseData) && responseData.length === 0) {
                throw new Error('No se encontraron datos. ¿Has puesto bien el número de la página?');
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    },

    ctw: async (mode, time, page = 'default') => {
        const validModes = ['kills', 'wins'];
        const validTimes = ['lifetime', 'monthly', 'weekly', 'daily'];

        if (!mode || !validModes.includes(mode)) {
            throw new Error(`Modo no válido. Debe ser uno de estos: ${validModes.join(', ')}`);
        }

        if (!time || !validTimes.includes(time)) {
            throw new Error(`Intervalo de tiempo no válido. Debe ser uno de estos: ${validTimes.join(', ')}`);
        }

        if (isNaN(page) || page < 1) {
            throw new Error('La página no es un número válido. Debe ser un número mayor o igual a 1.');
        }

        const url = `https://api.toadstudio.es/api/zstats/stats/ctw/${mode}/${time}/${page}`;

        try {
            const response = await axios.get(url);
            const responseData = response.data;

            if (Array.isArray(responseData) && responseData.length === 0) {
                throw new Error('No se encontraron datos. ¿Has puesto bien el número de la página?');
            }

            return responseData;
        } catch (error) {
            throw error;
        }
    },
};

/*
para otro día
const top = {
    get: async (modalidad, mode, time, type, top = 'default') => {
        //ruta ejemplo https://api.toadstudio.es/api/zstats/stats/skywars/solo/wins/lifetime/top/25

        const apiUrl = `https://api.toadstudio.es/api/zstat/${modalidad}/${type}/${mode}/${time}/top/${top}`;
  
        try {
          const response = await axios.get(apiUrl);
          return response.data;
        } catch (error) {
          throw new Error("Algo está mal. Revisa los docs aquí: https://docs.toadstudio.es");
        }
      },
}
*/
module.exports = { online, stats };