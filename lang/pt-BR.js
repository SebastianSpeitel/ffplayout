export default {
    ok: 'Ok',
    cancel: 'Cancelar',
    alert: {
        wrongLogin: 'Dados incorretos!',
    },
    button: {
        login: 'Logar',
        home: 'Sistema',
        player: 'Playout',
        media: 'Mídias',
        message: 'Mensagens',
        logging: 'Registros',
        channels: 'Canais',
        configure: 'Configurar',
        logout: 'Sair',
    },
    error: {
        notFound: 'Página não encontrada',
        serverError: 'Erro do servidor interno',
    },
    input: {
        username: 'Usuário',
        password: 'Senha',
    },
    system: {
        cpu: 'Processador',
        cores: 'Núcleos',
        load: 'Processos',
        memory: 'Memória',
        swap: 'Memória swap',
        total: 'Total',
        usage: 'Uso',
        network: 'Rede',
        in: 'Download',
        out: 'Upload',
        storage: 'Armazenamento',
        device: 'Dispositivo',
        size: 'Tamanho total',
        used: 'Disponível',
    },
    control: {
        noClip: 'Nenhuma mídia está sendo reproduzida!',
        ingest: 'Ingestão ao vivo',
        start: 'Iniciar Playout',
        last: 'Ir para a mídia anterior',
        stop: 'Parar serviço do Playout',
        reset: 'Redefinir estado do Playout',
        restart: 'Reiniciar Playout',
        next: 'Ir para o próxima mídia',
    },
    player: {
        start: 'Horário',
        file: 'Mídia',
        play: 'Visualizar',
        duration: 'Duração',
        in: 'Entrada',
        out: 'Saida',
        ad: 'Ad',
        edit: 'Editar',
        delete: 'Deletar',
        copy: 'Copiar playlist',
        loop: 'Loop das mídias na playlist',
        remote: 'Adicionar fonte (remota) à playlist',
        import: 'Importar arquivo de texto/.m3u8',
        generate: 'Gerador de playlist simples e avançado',
        reset: 'Resetar playlist',
        save: 'Salvar playlist',
        deletePlaylist: 'Deletar playlist',
        unsavedProgram: 'Existe uma playlist que não está salva!',
    },
    media: {
        notExists: 'Mídia não existe!',
        create: 'Criar pasta',
        upload: 'Fazer upload de mídias',
        deleteTitle: 'Excluir mídia/pasta',
        deleteQuestion: 'Tem certeza que deseja excluir?',
        preview: 'Reproduzir',
        rename: 'Renomear mídia',
        newFile: 'Novo nome da mídia',
        createFolder: 'Criar pasta',
        foldername: 'Nome da pasta',
        current: 'Atual',
        overall: 'Total',
        uploading: 'Enviando',
        moveError: 'Erro ao mover',
        deleteError: 'Erro ao excluir!',
        folderExists: 'A pasta já existe',
        folderCreate: 'Criação da pasta concluída...',
        folderError: 'Erro ao criar pasta',
        uploadError: 'Erro ao carregar',
        fileExists: 'A mídia já existe!',
    },
    message: {
        savePreset: 'Salvar predefinição',
        newPreset: 'Nova predefinição',
        delPreset: 'Excluir predefinição',
        delText: 'Tem certeza de que deseja excluir a predefinição?',
        placeholder: 'Mensagem',
        xAxis: 'Eixo X',
        yAxis: 'Eixo Y',
        showBox: 'Mostrar caixa',
        boxColor: 'Cor da caixa',
        boxAlpha: 'Caixa Alfa',
        size: 'Tamanho',
        spacing: 'Espaçamento',
        overallAlpha: 'Alfa geral',
        fontColor: 'Cor da fonte',
        fontAlpha: 'Fonte Alfa',
        borderWidth: 'Largura da borda',
        send: 'Enviar',
        name: 'Nome',
    },
    config: {
        channel: 'Canal',
        user: 'Usuários',
        channelConf: 'Configuração do canal',
        addChannel: 'Adicionar novo canal',
        name: 'Nome',
        previewUrl: 'URL de visualização',
        configPath: 'Caminho de configuração',
        extensions: 'Extensões extras',
        service: 'Serviço',
        save: 'Salvar',
        delete: 'Deletar',
        updateChannelSuccess: 'Atualização da configuração do canal com sucesso!',
        updateChannelFailed: 'Falha na atualização da configuração do canal!',
        errorChannelDelete: 'O primeiro canal não pode ser excluído!',
        deleteChannelSuccess: 'Excluir configuração da GUI com sucesso!',
        deleteChannelFailed: 'Falha ao excluir configuração da GUI!',
        playoutConf: 'Configuração do ffplayout',
        general: 'Geral',
        rpcServer: 'RPC Server',
        mail: 'Email',
        logging: 'Registros',
        processing: 'Processamento',
        ingest: 'Ingerir',
        playlist: 'Playlist',
        storage: 'Armazenamento',
        text: 'Texto',
        task: 'Tarefa',
        out: 'Transmissão',
        placeholderPass: 'Senha',
        help: 'Ajuda',
        generalText: `Às vezes pode acontecer que um arquivo esteja corrompido, mas ainda possa ser reproduzido, o que pode causar um erro de streaming em todos os arquivos seguintes. A única maneira de corrigir isso é parar e reiniciar o ffplayout. Aqui só dizemos quando parar, o processo de início é com você. A melhor maneira é um serviço systemd no Linux.
        'stop_threshold' irá parar o ffplayout se for assíncrono no tempo acima deste valor. Um número menor que 3 pode causar erros inesperados.`,
        rpcText: 'Execute um servidor JSON RPC para obter informações sobre o que está sendo reproduzido e para algumas funções de controle. Ao desativar esse serviço, o front end não responderá com as informações de mídia, entre outras funções.',
        mailText: `Enviar mensagens de erro para o endereço de e-mail, como lista de reprodução ausente; formato JSON inválido; faltando caminho do clipe. Deixe o destinatário em branco se não precisar dele. 'mail_level' pode ser INFO, WARNING ou ERROR. 'interval' eo tempo em segundos até que um novo e-mail seja enviado.`,
        logText: `Se 'log_to_file' estiver acionado, registre no arquivo; se for desativado, registre no console. 'backup_count' indica por quanto tempo os arquivos de registro serão salvos em dias. 'local_time' acionado definirá os carimbos de data e hora do log para UTC. Caminho para /var/log/ somente se você estiver executando como um daemon.
        'nível' pode ser DEBUG, INFO, WARNING, ERROR. 'ffmpeg_level' pode ser INFO, AVISO, ERRO. 'detect_silence' registra uma mensagem de erro se a linha de áudio ficar em silêncio por 15 segundos durante o processo de validação. 'ignore_lines' Ignorar erros de registros`,
        processingText: `Processamento padrão para todos os clipes para torná-los únicos. O modo pode ser Playlist ou Folder. 'aspecto' deve ser um número flutuante. 'logotipo' só é usado se o caminho existir.
        'logo_scale' dimensiona o logotipo para o tamanho desejado, deixe em branco se nenhum dimensionamento for necessário, o formato é 'largura:altura', por exemplo '100:-1' para dimensionamento proporcional. Com 'logo_opacity' você pode tornar o logotipo transparente.
        Com 'audio_tracks' é possível configurar quantas faixas de áudio devem ser processadas. 'audio_channels' pode ser usado se o áudio tiver mais canais do que apenas estéreo. Com 'logo_position' no formato 'x:y' você define a posição do logotipo. Com 'custom_filter' é possível aplicar filtros adicionais. As saídas do filtro devem terminar com [c_v_out] para filtros de vídeo e [c_a_out] para filtros de áudio.`,
        ingestText: `Execute um servidor para um fluxo de ingestão. Este fluxo substituirá o streaming normal até que seja concluído. Existe apenas um mecanismo de autenticação muito simples para verificar se o nome do stream está correto. 'custom_filter' pode ser usado da mesma forma que na seção de processo.`,
        playlistText: `'path' Onde a playlist será salva. Para diretório especifique apenas a pasta raiz, por exemplo '/playlists', os subdiretórios serão lidos pelo programa. Os subdiretórios precisam desta estrutura '/playlists/2018/01'.
        'day_start' é o horário em que a playlist deve começar, deixe 'day_start' vazio se a playlist deve sempre começar do início. 'length' representa a duração alvo da lista de reprodução; se estiver vazio, a duração real não será considerada. 'infinit: true' funciona com um único arquivo de lista de reprodução e faz um loop infinito.`,
        storageText: `'path' E onde será salvo ás "Mídias" ou onde se encontrar elas. 'filler_clip' Serve para preencher na falta de "Mídia" no Playout, ele fará um loop quando necessário. Defina 'extensions' para pesquisar apenas arquivos com essa extensão. Defina 'shuffle' como 'true' para selecionar arquivos aleatoriamente.`,
        textText: `Sobreponha texto em combinação com libzmq para manipulação remota de texto. No Windows, o caminho do arquivo da fonte deve ser 'C\\:/WINDOWS/fonts/DejaVuSans.ttf'. 'text_from_filename' ativa a extração de texto de um nome de arquivo. Com 'style' você pode definir os parâmetros do drawtext como posição, cor, etc. Postar texto via API irá substituir isso. Com 'regex' você pode formatar o nome do arquivo para obter um título.`,
        taskText: `Execute um programa externo com um determinado objeto de mídia. O objeto de mídia está no formato JSON e contém todas as informações sobre o clipe atual. O programa externo pode ser um script ou um binário. ou um binário, mas deve ser executado apenas por um curto período de tempo.`,
        outText: `A compactação de playout final. Ajuste as configurações de acordo com suas necessidades. 'mode' possui as opções 'desktop', 'hls', 'null', 'stream'. Use 'stream' e ajuste as configurações de 'output_param:' se desejar transmitir para um servidor rtmp/rtsp/srt/.... Na produção, não sirva playlist hls com ffpapi, use nginx ou outro servidor web!`,
        restartTile: 'Reiniciar ffplayout',
        restartText: 'Reiniciar o ffplayout para aplicar as alterações?',
    },
    user: {
        title: 'Configuração do usuário',
        add: 'Adicionar usuário',
        delete: 'Excluir',
        name: 'Nome de usuário',
        mail: 'Email',
        password: 'Senha',
        newPass: 'Nova senha',
        confirmPass: 'Confirmar senha',
        save: 'Salvar',
        admin: 'Administrador',
        deleteNotPossible: 'Excluir usuário atual não é possível!',
        deleteSuccess: 'Exclusão de usuário concluído!',
        deleteError: 'Erro ao excluir usuário',
        addSuccess: 'Usuário adicionado com sucesso!',
        addFailed: 'Falha ao adicionar usuário!',
        mismatch: 'Senha incorreta!',
        updateSuccess: 'Atualização das informações do usuário com sucesso!',
        updateFailed: 'Falha na atualização das informações do usuário!',
    },
}
